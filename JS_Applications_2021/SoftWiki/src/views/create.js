import { html } from '../../node_modules/lit-html/lit-html.js';
import { createArticle } from '../api/data.js';


const template = (onSubmit) => html`
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${onSubmit} id="create" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`

export async function create(ctx) {
    const categories = ['JavaScript', 'C#', 'Java', 'Python'];


    ctx.render(template(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');

        try {
            if (title == '' || category == '' || content == '') {
                throw new Error('All fields are required!');
            }
            if(!categories.some(c => c == category)) {
                throw new Error('Invalid category!')
            }
    
            const data = {
                title,
                category,
                content
            }

            await createArticle(data);
            ctx.page.redirect('/');

        } catch (err) {
            return alert(err)
        }
    }
}