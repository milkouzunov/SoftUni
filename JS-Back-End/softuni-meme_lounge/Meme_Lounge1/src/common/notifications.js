import { html } from '../../node_modules/lit-html/lit-html.js';


export const notification = (msg) => html`
<section id="notifications">
    <div id="errorBox" class="notification">
        <span>${msg}</span>
    </div>
</section>`