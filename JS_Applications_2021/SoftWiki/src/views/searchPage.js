import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchArticle } from '../api/data.js';

const template = (onSearch, articles) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">

        ${articles ? articles.map(articleTemplate) : html`<h3 class="no-articles">No matching articles</h3>`}

    </div>
</section>`

const articleTemplate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`

export async function search(ctx) {
    const query = ctx.querystring.split('=')[1];
    let searchResult;

    update();
    if (query != undefined) {
        searchResult = await searchArticle(query);
        if(searchResult.length == 0) {
            searchResult = undefined;
        }
        update();
        console.log(searchResult);
    }

    function onSearch(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const searchValue = formData.get('search');

        ctx.page.redirect('/search?query=' + searchValue);
    }

    function update() {
        ctx.render(template(onSearch, searchResult));
    }
}