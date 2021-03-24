import { html } from '../../node_modules/lit-html/lit-html.js';
import { editTeam, getTeamById } from '../api/data.js';
import { loaderTemplate } from './loader.js';

const editTemplate = (team, onSubmit, errorMsg) => html`<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onSubmit} id="edit-form" class="main-form pad-large">
            ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
            <label>Team name: <input type="text" name="name" .value=${team.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>`

export async function edit(ctx) {
    ctx.render(loaderTemplate());

    const teamId = ctx.params.id;
    const team = await getTeamById(teamId);

    ctx.render(editTemplate(team, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        ctx.render(loaderTemplate());

        const formData = new FormData(ev.target);

        const name = formData.get('name');
        const logoUrl = formData.get('logoUrl');
        const description = formData.get('description');

        try {
            if (name.length < 4) {
                throw new Error('Team name must be at least 4 characters long.')
            }
            if (logoUrl == '') {
                throw new Error('Team logo is required.')
            }
            if (description.length < 10) {
                throw new Error('Team name must be at least 10 characters long.')
            }

            await editTeam(teamId, { name, description, logoUrl });
            ev.target.reset();

            ctx.page.redirect('/team-details/' + team._id);

        } catch (err) {
            ctx.render(editTemplate(team, onSubmit, err.message));
        }

    }
}