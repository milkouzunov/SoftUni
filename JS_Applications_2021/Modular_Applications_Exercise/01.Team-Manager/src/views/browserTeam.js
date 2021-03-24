import {loaderTemplate} from './loader.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

import {getTeams} from '../api/data.js'

const browserTemplate = (teams) => html`<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-small"><a href="/createTeam" class="action cta">Create Team</a></div>
    </article>

   ${teams.map(teamTemplate)}

</section>`

const teamTemplate = (team) => html`<article class="layout">
<img src=${team.logoUrl} class="team-logo left-col">
<div class="tm-preview">
    <h2>${team.name}</h2>
    <p>${team.description}</p>
    <span class="details">${team.memberCount} Members</span>
    <div><a href=${`/team-details/${team._id}`} class="action">See details</a></div>
</div>
</article>`


export async function browserTeam(ctx) {
    ctx.render(loaderTemplate());
    const teams = await getTeams();

    ctx.render(browserTemplate(teams));
}