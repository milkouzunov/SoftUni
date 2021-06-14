import { html } from '../../node_modules/lit-html/lit-html.js'
import { getMemesByOwnerId } from '../api/data.js';



const template = (memes, gender, email, username) => html`<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${gender == 'female' ? "/images/female.png" : "/images/male.png"}>
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
       ${memes != 0 ? memes.map(memeTemplate) : html`<p class="no-memes">No memes in database.</p>`}
    </div>`

    const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>`

export async function profilePage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const gender = sessionStorage.getItem('gender');
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');

    const memes = await getMemesByOwnerId(userId);
    ctx.render(template(memes, gender, email, username));
}