import {showHome} from './home.js';

export async function logout() {
    const response = await fetch(`http://localHost:3030/users/logout`, {
        method: 'post',
        headers: { 'X-Authorization': sessionStorage.getItem('authToken') }
    })
    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        Array.from(document.querySelectorAll('nav .user')).forEach(el => {
            el.style.display = 'none';
        });
        Array.from(document.querySelectorAll('nav .guest')).forEach(el => {
            el.style.display = 'block';
        });

    } else {
        console.error(response.statusText);
    }
    showHome();
}

