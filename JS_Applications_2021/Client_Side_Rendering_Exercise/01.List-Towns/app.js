import { render, html } from './node_modules/lit-html/lit-html.js';
const container = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', (ev) => {
    ev.preventDefault();
    const towns = document.getElementById('towns').value.split(', ');
    
    if (towns.length > 0) { 
        render(listView(towns), container);

        document.getElementById('towns').value = '';
    }
})

const listView = (towns) => html`<ul>${towns.map(createLi)}</ul>`
const createLi = (town) => html`<li>${town}</li>`
