import { createElement } from "./dom.js";
import { editMovie } from './edit.js'
import {deleteMovie} from './delete.js'
 
let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = 'Loading&hellip;'
    main.innerHTML = '';
    main.appendChild(section)

    const [movie, likes, ownLike] = await Promise.all([
        getMoviewById(id),
        getLikesByMovieId(id),
        getOwnLikeByMovieId(id)
    ]);
    const card = createMovieCard(movie, likes, ownLike);
    section.innerHTML = ''
    section.appendChild(card);
}


async function getMoviewById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();

    return data;
}

function createMovieCard(movie, likes, ownLike) {
    
    const userId = sessionStorage.getItem('userId');

    const element = createElement('div', { className: 'container' },
        createElement('div', { className: 'row bg-light text-dark' },
            createElement('h1', {}, `Movie title: ${movie.title}`),
            createElement('div', { className: 'col-md-8' },
                createElement('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            createElement('div', { className: 'col-md-4 text-center' },
                createElement('h3', { className: 'my-3' }, 'Movie Description'),
                createElement('p', {}, movie.description),
                createElement('a', { id: movie._id, className: 'btn btn-danger', href: '#', style: 'display:none;', onclick: deleteMovie }, 'Delete'),
                createElement('a', { id: movie._id, className: 'btn btn-warning', href: '#', style: 'display:none;', onclick: editMovie }, 'Edit'),
                createElement('a', { className: 'btn btn-primary', href: '#', style: 'display:none;', onclick: LikeMovie }, 'Like'),
                createElement('span', { className: 'enrolled-span' }, `Liked ${likes}`)
            )
        )
    )
    if (userId != null) {
        if (userId == movie._ownerId) {
            element.querySelector('.btn.btn-danger').style.display = 'inline-block';
            element.querySelector('.btn.btn-warning').style.display = 'inline-block';
        } else if(ownLike.length == 0) {
            element.querySelector('.btn.btn-primary').style.display = 'inline-block';
        }
    }
    async function LikeMovie(ev) {
        const response = await fetch(`http://localHost:3030/data/likes`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({ movieId: movie._id })
        });
        if (response.ok) {
            ev.target.remove();
            likes++;
            element.querySelector('.enrolled-span').textContent = `Liked ${likes}`;
        }
    }
    return element
}

async function getLikesByMovieId(id) {
    const response = await fetch (`http://localHost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();

    return data;
}

async function getOwnLikeByMovieId(id) {
    const userId = sessionStorage.getItem('userId')
    const response = await fetch (`http://localHost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data = await response.json();

    return data;
}



