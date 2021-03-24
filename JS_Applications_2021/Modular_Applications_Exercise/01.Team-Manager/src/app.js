import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { browserTeam } from './views/browserTeam.js';
import { teamDetails } from './views/teamDetails.js';
import { myTeams } from './views/myTeams.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';


import * as api from '../src/api/data.js';

window.api = api;

const main = document.querySelector('main');


page('/', decorateContext, homePage);
page('/browser-team', decorateContext, browserTeam);
page('/team-details', decorateContext, teamDetails);
page('/my-team', decorateContext, myTeams);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);

setUserNav();

page.start();


function decorateContext(ctx, next) {
    ctx.setUserNav = setUserNav;
    ctx.render = (content) => render(content, main);
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId != null) {
        Array.from(document.querySelectorAll('nav>a.user')).forEach(a => a.style.display = 'block');
        Array.from(document.querySelectorAll('nav>a.guest')).forEach(a => a.style.display = 'none');
    } else {
        Array.from(document.querySelectorAll('nav>a.user')).forEach(a => a.style.display = 'none');
        Array.from(document.querySelectorAll('nav>a.guest')).forEach(a => a.style.display = 'block');
    }
}



