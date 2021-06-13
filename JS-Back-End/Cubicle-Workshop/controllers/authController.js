const { Router } = require('express');

const authService = require('../services/authServive');

const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');
const validate = require('../middlewares/validate');


const router = Router();

router.get('/login', isGuest, (req, res) => {
    res.render('login');
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    if (username == '' || password == '') {
        res.render('login', { err: { message: 'All fields is required!' } });
        return;
    }

    try {
        let token = await authService.login({ username, password });
        res.cookie('Auth', token);

        res.redirect('/products');
    } catch (err) {
        res.render('login', { err });
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('register');
});

router.post('/register', isGuest, validate, async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    
    if (username == '' || password == '') {
        res.render('register', { err: { message: 'All fields is required!' } });
        return;
    }
    if (password !== repeatPassword) {
        res.render('register', { err: { message: 'Passwords don\'t match!' } });
        return;
    }
    

    try {
        if(!req.usernameErrors.lengthError) {
            throw { message: 'Invalid username, minimum 5 character'}
        }

        if(!req.usernameErrors.onlyEnglishLettersAndNumbers) {
            throw { message: 'Invalid username, only english letters and digits'}
        }

        if(!req.passwordError) {
            throw { message: 'Invalid password! Your password must be a minimum length of eight characters, consisting of the four of the following - lowercase (a-z), Uppercase (A-Z) alphabetic characters, numeric characters (0-9) and special characters (! $ %).'}
        }

        await authService.register({ username, password });
        res.redirect('/auth/login');
    } catch (err) {

        if (err.code == '11000') {
            err.message = 'The username has already been registered, please change the username'; 
        }
        res.render('register', { err });
    }
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie('Auth');

    res.redirect('/products')
})

module.exports = router;