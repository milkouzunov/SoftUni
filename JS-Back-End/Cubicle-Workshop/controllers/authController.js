const { Router } = require('express');

const authService = require('../services/authServive');

const isGuest = require('../middlewares/isGuest');
const isAuthenticated = require('../middlewares/isAuthenticated');


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

router.post('/register', isGuest, async (req, res) => {
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
        await authService.register({ username, password });
        
        res.redirect('/auth/login');
    } catch (err) {
        res.render('register', { err });
    }
});

router.get('/logout', isAuthenticated, (req,res) => {
    res.clearCookie('Auth');
    
    res.redirect('/products')
})

module.exports = router;