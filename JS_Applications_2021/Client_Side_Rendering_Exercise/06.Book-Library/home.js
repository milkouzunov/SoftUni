import { html } from './node_modules/lit-html/lit-html.js';
import {onEdit} from './edit.js';
import {del, post} from './api.js';
import {loadBooks} from './app.js';

export let tableTemplate = (data) => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
       ${Object.entries(data).map(tableRow)}
    </tbody>
</table>`

let tableRow = (data) => html`
<tr>
    <td>${data[1].title}</td>
    <td>${data[1].author}</td>
    <td>
        <button id=${data[0]} @click=${onEdit}>Edit</button>
        <button id=${data[0]} @click=${(ev) => del(ev.target.id)}>Delete</button>
    </td>
</tr>`;


export let addForm = html`
<form @submit=${addBook} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;


async function addBook(ev) {
    ev.preventDefault();
    
    let title = ev.target.querySelector('[name="title"]');
    let author = ev.target.querySelector('[name="author"]');

    if(title.value != '' && author.value != '') {
        await post({title: title.value, author: author.value});
        loadBooks();

        title.value = '';
        author.value = '';
    }
}


