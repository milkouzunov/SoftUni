import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';
import { notification } from '../common/notifications.js'


const template = (onSubmit, notification) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            ${notification}
            <h1>Login</h1>
            <label for="username">Username</label>
            <input id="username" placeholder="Enter Username" name="username" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="#">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`

export async function loginPage(ctx) {
    ctx.render(template(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const username = formData.get('username');
        const password = formData.get('password');
        

        try {
            if (username == '') {
                throw new Error('All fields are required!');
            }
            if (password == '') {
                throw new Error('All fields are required!');
            }
           

            await login(  
                username,
                password,
            )
            ctx.setUserNav();
            ctx.page.redirect('/allMemes');

        } catch (err) {
            ctx.render(template(onSubmit, notification(err)))
        } 


    }

}