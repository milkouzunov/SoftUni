import { html } from '../../node_modules/lit-html/lit-html.js';
import { editArticle, getArticleById } from '../api/data.js';


const template = (article, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${article.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category" .value=${article.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${article.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`

export async function edit(ctx) {
    const categories = ['JavaScript', 'C#', 'Java', 'Python'];

    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);
    


    ctx.render(template(article, onSubmit));

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

            await editArticle(articleId, data);

            ctx.page.redirect(`/details/${articleId}`);

        } catch (err) {
            return alert(err)
        }
    }
}