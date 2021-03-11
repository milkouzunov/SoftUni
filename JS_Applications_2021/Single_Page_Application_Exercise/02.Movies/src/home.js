import {createElement} from './dom.js';
import { showDetails } from './details.js'

async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();

    return data;
}

function createMoviePreview (movie) {
    let element = createElement('div', {className: 'card-deck d-flex justify-content-center'},
                    createElement('div', {className: 'card mb-4'},
                        createElement('img', {src: movie.img, alt:'"Card image cap" width="400"'}),
                        createElement('div', {className: 'card-body'},
                            createElement('h4', {className: 'card-title'}, movie.title)
                        ),
                        createElement('div', {className: 'card-footer'},
                            createElement('button', {id: movie._id, type: 'button', className: 'btn btn-info movieDetailsLink'}, 'Details')
                        )
                    )
                )


    return element;
}

let main;
let section;
let moviesContainer = document.getElementById('movies');

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    moviesContainer.addEventListener('click', (ev) => {
        if(ev.target.classList.contains('movieDetailsLink')){
            showDetails(ev.target.id);
        }
    })
}

export async function showHome() {
    moviesContainer.innerHTML = 'Loading&hellip;'
    main.innerHTML = '';
    main.appendChild(section);

    const movies = await getMovies();
    const cards = movies.map(createMoviePreview)

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    moviesContainer.innerHTML = '';
    moviesContainer.appendChild(fragment);
}
