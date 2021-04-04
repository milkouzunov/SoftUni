import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout as apiLogout } from './api/data.js'

import { home } from './views/home.js';
import { details } from './views/details.js';
import { create } from './views/create.js';
import { edit } from './views/edit.js';
import { catalog } from './views/catalog.js';
import { search } from './views/searchPage.js';
import { login } from './views/login.js';
import { register } from './views/register.js';



const main = document.getElementById('main-content');

document.getElementById('logoutBtn').addEventListener('click', logout)


page('/', decorateContext, home);
page('/catalog', decorateContext, catalog);
page('/search', decorateContext, search);
page('/details/:id', decorateContext, details);
page('/create', decorateContext, create);
page('/edit/:id', decorateContext, edit);
page('/login', decorateContext, login);
page('/register', decorateContext, register);


setUserNav();

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId != null) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

async function logout() {
    await apiLogout ();
    setUserNav();
    page.redirect('/');
}