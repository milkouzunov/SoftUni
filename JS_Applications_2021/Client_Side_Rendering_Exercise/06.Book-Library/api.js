import {loadBooks} from './app.js'

const url = 'http://localhost:3030/jsonstore/collections/books/';

export async function get () {
    const data = await (await fetch(url)).json();
    return data;
}

export async function post(data) {
    const response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if(response.ok != true) {
        console.error(response.statusText);
    }
}

export async function put(data, id) {
    const response = await fetch(url + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if(response.ok != true) {
        console.error(response.statusText);
    }
}

export async function del(id) {
    const response = await fetch(url + id, {
        method: 'delete'
    });
    if(response.ok != true) {
        console.error(response.statusText);
    } else {
        await loadBooks();
    }
}