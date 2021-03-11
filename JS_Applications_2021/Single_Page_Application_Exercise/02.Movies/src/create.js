import {showHome} from './home.js';

let main;
let section;

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    addMovie();
}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section)
}

function addMovie() {
     
    section.querySelector('.text-center.border.border-light.p-5').addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const dataForm = new FormData(ev.target);

        const title = dataForm.get('title');
        const description = dataForm.get('description');
        const img = dataForm.get('imageUrl');

        if(title != '' && description != '' && img != '') {

            const response = await fetch(`http://localhost:3030/data/movies/${ev.target.id}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('authToken')
                },
                body: JSON.stringify({title, description, img})
            });

            showHome();
        }
    })
}