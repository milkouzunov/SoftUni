import { html, render } from './node_modules/lit-html/lit-html.js';
import { get } from './api.js';
import {tableTemplate, addForm} from './home.js';


const body = document.querySelector('body');
const loadBtn = html`<button @click=${loadBooks} id="loadBooks">LOAD ALL BOOKS</button>`
render(loadBtn, body)

export async function loadBooks () {
    const data = await get();
    render([tableTemplate(data), addForm], body);
}