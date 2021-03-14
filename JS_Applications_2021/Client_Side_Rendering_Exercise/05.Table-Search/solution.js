import { getItems } from './api.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

loadTable();

async function loadTable() {
   const tableBody = document.querySelector('tbody');
   const data = await getItems();
   let tableRows = [];

   const rowTemplate = (data) => html`
   <tr>
      <td>${data.firstName} ${data.lastName}</td>
      <td>${data.email}</td>
      <td>${data.course}</td>
   </tr>`;

   Object.values(data).forEach(el => {
      tableRows.push(rowTemplate(el));
   });

   render(tableRows, tableBody);
}


document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {
   let searchInput = document.getElementById('searchField');
   const tableRows = document.querySelectorAll('tr');

   if (searchInput.value != '') {
      const matchRows = Array.from(tableRows).filter(row => row.textContent.includes(searchInput.value));
      const otherRows = Array.from(tableRows).filter(row => !row.textContent.includes(searchInput.value));

      matchRows.forEach(row => row.classList.add('select'));
      otherRows.forEach(row => row.classList.remove('select'));

      searchInput.value = '';
   }

}

