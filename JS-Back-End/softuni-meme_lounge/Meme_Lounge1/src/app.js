import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout as apiLogout} from '../src/api/data.js'

import { welcomePage } from './views/welcome.js';
import { allMemesPage } from './views/allMemes.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

document.getElementById('logoutBtn').addEventListener('click', logout);

const main = document.querySelector('main');


page('/', decorateContext, welcomePage);
page('/allMemes', decorateContext, allMemesPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/profile', decorateContext, profilePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);


setUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        document.querySelector('.profile>span').textContent = `Welcome, ${sessionStorage.getItem('email')}`
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        page.redirect('/allMemes');
    } else {
        page.redirect('/');
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

async function logout () {
    await apiLogout();
    setUserNav();
}

//  class="active"

