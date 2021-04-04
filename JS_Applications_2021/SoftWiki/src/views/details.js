import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteArticle, getArticleById } from '../api/data.js';


const template = (article, onDelete, isOwner) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>` : ''}
            
            <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`

export async function details(ctx) {
    const userId = sessionStorage.getItem('userId');
    const articleId = ctx.params.id;
    const article = await getArticleById(articleId);
    const ownerId = article._ownerId
    const isOwner = userId == ownerId;

    ctx.render(template(article, onDelete, isOwner));

    async function onDelete () {
        await deleteArticle(articleId);

        ctx.page.redirect('/');
    }
}