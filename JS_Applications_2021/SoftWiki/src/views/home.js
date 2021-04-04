import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticlesByCategory } from '../api/data.js';


const template = (articles) => html`
<section id="home-page" class="content">
            <h1>Recent Articles</h1>
            <section class="recent js">
                <h2>JavaScript</h2>
                ${articles.some(a => a.category == 'JavaScript') != false ? html`
                <article>
                    <h3>${articles.find(a => a.category == 'JavaScript').title}</h3>
                    <p>${articles.find(a => a.category == 'JavaScript').content}</p>
                    <a href="/details/${articles.find(a => a.category == 'JavaScript')._id}" class="btn details-btn">Details</a>
                </article>` 
                : html`<h3 class="no-articles">No articles yet</h3>`}
            </section>

            <section class="recent csharp">
                <h2>C#</h2>
                ${articles.some(a => a.category == 'C#') != false ? html`
                <article>
                    <h3>${articles.find(a => a.category == 'C#').title}</h3>
                    <p>${articles.find(a => a.category == 'C#').content}</p>
                    <a href="/details/${articles.find(a => a.category == 'C#')._id}" class="btn details-btn">Details</a>
                </article>` 
                : html`<h3 class="no-articles">No articles yet</h3>`}
            </section>

            <section class="recent java">
                <h2>Java</h2>
                ${articles.some(a => a.category == 'Java') != false ? html`
                <article>
                    <h3>${articles.find(a => a.category == 'Java').title}</h3>
                    <p>${articles.find(a => a.category == 'Java').content}</p>
                    <a href="/details/${articles.find(a => a.category == 'Java')._id}" class="btn details-btn">Details</a>
                </article>` 
                : html`<h3 class="no-articles">No articles yet</h3>`}
            </section>

            <section class="recent python">
                <h2>Python</h2>
                ${articles.some(a => a.category == 'Python') != false ? html`
                <article>
                    <h3>${articles.find(a => a.category == 'Python').title}</h3>
                    <p>${articles.find(a => a.category == 'Python').content}</p>
                    <a href="/details/${articles.find(a => a.category == 'Python')._id}" class="btn details-btn">Details</a>
                </article>` 
                : html`<h3 class="no-articles">No articles yet</h3>`}
            </section>

        
        </section>`


export async function home(ctx) {
   const articles = await getArticlesByCategory();
    ctx.render(template(articles));
}