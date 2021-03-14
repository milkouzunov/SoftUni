import { html } from './node_modules/lit-html/lit-html.js';

export let catsTemplate = (catsData) => html`<ul>${catsData.map(catTemplate)}</ul>`;


let catTemplate = (data) => html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${showStatus}>Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>`;

function showStatus(ev) {
    let statusDiv = (ev.target.parentNode).querySelector('.status');

    if (statusDiv.style.display == 'none') {
        statusDiv.style.display = 'block';
    } else {
        statusDiv.style.display = 'none';
    }
}

