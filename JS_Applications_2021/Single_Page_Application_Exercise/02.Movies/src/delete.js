import { showHome } from './home.js';

export async function deleteMovie(ev) {
    const response = await fetch(`http://localhost:3030/data/movies/${ev.target.id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        }
    });
    showHome();
}