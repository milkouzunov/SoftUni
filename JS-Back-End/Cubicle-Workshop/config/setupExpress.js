const express = require('express');
const hbs = require('express-handlebars');
const Handlebars = require('handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');

Handlebars.registerHelper("select", function (value, options) {
    return options.fn(this)
        .split('\n')
        .map(function (v) {
            var t = 'value="' + value + '"'
            return !RegExp(t).test(v) ? v : v.replace(t, t + ' selected="selected"')
        })
        .join('\n')
})


module.exports = (app) => {

    app.engine('hbs', hbs({
        extname: 'hbs',
    }))

    app.set('view engine', 'hbs');

    app.use(express.static('public'));

    app.use(express.urlencoded({ extended: true }));

    app.use(cookieParser());

    app.use(auth());

}