import { html } from '../../node_modules/lit-html/lit-html.js'
import { editMeme, getMemeById } from '../api/data.js';
import { notification } from '../common/notifications.js';


const template = (meme, onSumbit, notification) => html`
<section id="edit-meme">
    <form @submit=${onSumbit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            ${notification}
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>

            </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`

export async function editPage(ctx) {
    const memeId = ctx.params.id;
    const meme = await getMemeById(memeId)

    ctx.render(template(meme, onSubmit));

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

            await editMeme(memeId, title, description, imageUrl);

            ctx.page.redirect('/allMemes');

        } catch (err) {
            ctx.render(template(meme, onSubmit, notification(err)))
        }
    }
}