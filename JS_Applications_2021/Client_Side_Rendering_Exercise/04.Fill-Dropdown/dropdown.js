import { html, render} from './node_modules/lit-html/lit-html.js';
import {getItems, postItems} from './api.js'

loadItems();

async function loadItems () {
    const data = await getItems();
    const menu = document.querySelector('#menu');
    const items = [];

    let optionTemplate = (item) => html`<option value=${item._id}>${item.text}</option>`;
    
    Object.values(data).forEach(el => {
        items.push(optionTemplate(el));
    });

    render(items, menu);
}

const form = document.querySelector('form').addEventListener('submit', addItem)

async function addItem(ev) {
   ev.preventDefault();

   const input = document.querySelector('#itemText');

   if(input.value != '') {
        postItems({text: input.value});
        input.value = '';
        
        loadItems();
   }

}

