import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRequestsByTeamId, getTeamById, requestToJoin, cancelMembership, approveMemberShip } from '../api/data.js'
import { loaderTemplate } from './loader.js';



const detailsTemplate = (team, isOwner, createControls,members, pending) => html`<section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.memberCount} Members</span>
            <div>
                ${createControls()}
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${members.map(m => memberTemplate(m, isOwner))}
            </ul>
        </div>

        ${isOwner ? html`<div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${pending.map(pendingMemberTemplate)}
                
            </ul>
        </div>` : ''}

    </article>
</section>`

const memberTemplate = (request, isOwner) => html`<li>${request.user.username} ${isOwner ? html`<a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>` : ''}</li>`

const pendingMemberTemplate = (request) => html`
<li>
${request.user.username}
<a @click=${request.approve} href="javascript:void(0)" class="tm-control action">Approve</a>
<a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Decline</a>
</li>`


export async function teamDetails(ctx) {
    const teamId = ctx.params.id;
    const userId = sessionStorage.getItem('userId');

    ctx.render(loaderTemplate());



    const [team, requests] = await Promise.all([
        getTeamById(teamId),
        getRequestsByTeamId(teamId)

    ]);
    requests.forEach(r => {
        r.approve = (e) => approve(e,r);
        r.decline = (e) => leave(e,r._id);
        
    });
    const isOwner = userId == team._ownerId;
    const members = requests.filter(r => r.status == 'member');
    
    const pending = requests.filter(r => r.status == 'pending')
    

    team.memberCount = members.length;

    ctx.render(detailsTemplate(team, isOwner, createControls,members, pending));

    function createControls() {
        if (userId != null) {
            const request = requests.find(r => r._ownerId == userId)
            if (isOwner) {
                //current user is owner
                return html`<a href=${`/edit/${team._id}`} class="action">Edit team</a>`
            } else if (request && request.status == 'member') {
                // current user is a member
                return html`<a @click=${e => leave(e, request._id)} href="javascript:void(0)" class="action invert">Leave team</a>`
            } else if (request && request.status == 'pending') {
                // current user has a pending requst
                return html`Membership pending. <a @click=${e => leave(e, request._id)} href="javascript:void(0)">Cancel request</a>`
            } else {
                //user is not related to the team
                return html`<a @click=${join} href="javascript:void(0)" class="action">Join team</a>`
            }
        } else {
            // guest visitor
            return '';
        }
    }

    async function join(event) {
        event.target.remove();
        ctx.page.redirect(`/team-details/${teamId}`);

        await requestToJoin(teamId);

    }

    async function leave(ev, requestId) {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            ev.target.remove();

            ctx.page.redirect(`/team-details/${teamId}`);

            await cancelMembership(requestId);

        }
    }

    async function approve (ev, request) {
        ev.target.remove();
        
        ctx.page.redirect(`/team-details/${teamId}`);
        await approveMemberShip(request);
    }
        
    
}