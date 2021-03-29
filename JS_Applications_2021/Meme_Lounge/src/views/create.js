import { html } from '../../node_modules/lit-html/lit-html.js'
import { createMeme } from '../api/data.js';
import { notification } from '../common/notifications.js';



const template = (onSubmit, notification) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            ${notification}
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`

export async function createPage(ctx) {
    ctx.render(template(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        try {
            if (title == '') {
                throw new Error('All fields are required!');
            }
            if (description == '') {
                throw new Error('All fields are required!');
            }
            if (imageUrl == '') {
                throw new Error('All fields are required!');
            }

            await createMeme(title, description, imageUrl);
            
            ctx.page.redirect('/allMemes');

        } catch (err) {
            ctx.render(template(onSubmit, notification(err)))
        }
    }
}
