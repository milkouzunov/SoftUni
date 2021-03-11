import { showHome } from "./home.js";

let main;
let section;


export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    
    section.querySelector('form').addEventListener('submit', onSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section)
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localHost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    });

    if(response.ok) {
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
    } else {
        document.querySelector('#form-login .error-msg').textContent = 'Invalid email or password!'
    }
}