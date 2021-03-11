import { setupHome, showHome } from './home.js';
import { setupDetails } from './details.js';
import { setupLogin, showLogin } from './login.js';
import { setupRegister, showRegister } from './register.js';
import { setupCreate, showCreate } from './create.js';
import { setupEdit } from './edit.js';
import { logout } from './logout.js';

const main = document.querySelector('main');

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate,
    'logoutLink' : logout
}

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNavigation();

 //Start application in home page
showHome();


function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNavigation() {
    const email = sessionStorage.getItem('email');
    if(email != null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email.substring(0, email.indexOf('@'))}`;
        Array.from(document.querySelectorAll('nav .user')).forEach(el => {
            el.style.display = 'block';
        })
        Array.from(document.querySelectorAll('nav .guest')).forEach(el => {
            el.style.display = 'none';
        })
    } else {
        Array.from(document.querySelectorAll('nav .user')).forEach(el => {
            el.style.display = 'none';
        })
        Array.from(document.querySelectorAll('nav .guest')).forEach(el => {
            el.style.display = 'block';
        })

    }
    document.querySelector('nav').addEventListener('click', (ev) => {
        const view = links[ev.target.id]
        if (typeof view == 'function') {
            ev.preventDefault();
            view();
        }
    })
    document.getElementById('createLink').addEventListener('click', (ev) => {
        ev.preventDefault();
        showCreate();
    })
}

