const { Router } = require('express');

const authService = require('../services/authServive')


const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username == '' || password == '') {
        res.render('login', { err: { message: 'All fields is required!' } });
        return;
    }

    try {
       let token = await authService.login({ username, password });

        res.redirect('/products');
    } catch (err) {
        res.render('login', { err });
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
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
        await authService.register({ username, password })

        res.redirect('/products');
    } catch (err) {
        res.render('register', { err });
    }
});
module.exports = router;