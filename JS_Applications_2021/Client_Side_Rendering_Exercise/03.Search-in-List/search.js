import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const divTowns = document.getElementById('towns');

const townsTemplate = (towns) => html`<ul>${towns.map((town) => html`<li>${town}</li>`)}</ul>`

render(townsTemplate(towns), divTowns);

document.querySelector('button').addEventListener('click', search)


function search() {
   const searchInput = document.getElementById('searchText').value;
   document.getElementById('searchText').value = '';
   const result = towns.filter(town => town.includes(searchInput));

   document.getElementById('result').textContent = `${result.length} matches found`;

   const townsTemplate = (towns) => html`<ul>${towns.map((town) => {
      if(result.includes(town)) {
         return html`<li class="active">${town}</li>`;
      } else {
         return html`<li>${town}</li>`;
      }
   })}</ul>`

   render(townsTemplate(towns), divTowns);
}
