/*
тук смяната на формите (едит, адд) съм я направил малко кофти поне за мен, но не се сетих за по-добър вариант пробвах с replaceChild() 
ама нещо бърках и не разбрах къде ще съм благодарен някой, ако каже по добро решение в коментарите 
*/

import { render, html } from './node_modules/lit-html/lit-html.js';
import {tableTemplate} from './home.js';
import {put} from './api.js';
import { get } from './api.js'
import {loadBooks} from './app.js'


const body = document.querySelector('body');

export async function onEdit (ev) {
    const data = await get();
    const bookId = ev.target.id;
    
    const addForm = document.getElementById('add-form');

    addForm.remove();
    
    render([tableTemplate(data), editForm(bookId)], body)

    //addForm.parentNode.replaceChild(editForm(bookId), addForm)
}


export let editForm = (id) => html`
<form @submit=${editBook} id="edit-form">
    <input type="hidden" value=${id} name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`;

async function editBook(ev) {
    ev.preventDefault();
    let id = ev.target.querySelector('[name="id"]')
    let title = ev.target.querySelector('[name="title"]');
    let author = ev.target.querySelector('[name="author"]');

    if(title.value != '' && author.value != '') {
        await put({title: title.value, author: author.value}, id.value);
        
        title.value = '';
        author.value = '';
        
        loadBooks();
    }

}