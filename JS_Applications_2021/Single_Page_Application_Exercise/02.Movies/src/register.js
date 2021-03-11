import {showHome} from './home.js';
let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    section.querySelector('form').addEventListener('submit', onSubmit)
}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section)
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('repeatPassword');

    if (password.length < 6) {
        document.querySelector('#form-sign-up .error-msg').textContent = 'The password should be at least 6 characters long!';
        return;
    }
    if(password != rePass) {
        document.querySelector('#form-sign-up .error-msg').textContent = 'The passwords not match!';
        return;
    }

    const response = await fetch('http://localHost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);

        document.getElementById('welcome-msg').textContent = `Welcome, ${email.substring(0, email.indexOf('@'))}`;
        Array.from(document.querySelectorAll('nav .user')).forEach(el => {
            el.style.display = 'block';
        })
        Array.from(document.querySelectorAll('nav .guest')).forEach(el => {
            el.style.display = 'none';
        })

        showHome();
    } 
    
}