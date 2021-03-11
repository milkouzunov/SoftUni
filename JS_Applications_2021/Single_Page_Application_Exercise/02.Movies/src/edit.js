import { showHome } from "./home.js";

let main;
let section;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showEdit() {
    main.innerHTML = '';
    main.appendChild(section)
}

export function editMovie(e) {
    const form = section.querySelector('form');
    const movieTitle = (e.target.parentNode.parentNode).querySelector('h1')
        .textContent.split(': ')[1];
    const movieImg = (e.target.parentNode.parentNode).querySelector('img').src;
    const movieDescription = (e.target.parentNode).querySelector('p').textContent;


    showEdit();

    form.querySelector('[name="title"]').value = movieTitle;
    form.querySelector('[name="description"]').value = movieDescription;
    form.querySelector('[name="imageUrl"]').value = movieImg;

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const dataForm = new FormData(form);


        const title = dataForm.get('title');
        const description = dataForm.get('description');
        const url = dataForm.get('imageUrl');

        if(title != '' && description != '' && url != '') {

            const response = await fetch(`http://localhost:3030/data/movies/${e.target.id}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': sessionStorage.getItem('authToken')
                },
                body: JSON.stringify({title, description, url})
            });

            showHome();
        }
    })
}