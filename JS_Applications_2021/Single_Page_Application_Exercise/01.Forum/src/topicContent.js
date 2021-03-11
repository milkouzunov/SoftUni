import { createElement } from './dom.js'

let main;
let section;

export function setupTopicContent(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export function showTopicContent(data) {
    main.innerHTML = '';
    section.forEach(sect => {
        main.appendChild(sect);
    });

    viewTopicContent(data);
}


function viewTopicContent(data) {
    const title = data.querySelector('h2').textContent;
    const postDate = data.querySelector('.columns time').textContent;
    const nickName = data.querySelector('.nick-name span').textContent;
    const subscribers = data.querySelector('.subscribers span').textContent;

    document.querySelector('.topic-content').innerHTML = `
    <div class="topic-title">
            <div class="topic-name-wrapper">
                <div class="topic-name">
                    <h2>${title}</h2>
                    <p>Date: <time>${postDate}</time></p>
                </div>
                <div class="subscribers">
                    <p>Subscribers: <span>${subscribers}</span></p>
                    <button class="subscribe" style="display:none;">Subscribe</button>
                    <button class="unsubscribe" style="display:none;">Unsubscribe</button>
                </div>
            </div>
    </div>
    <div class="answer-comment">
                    <p><span>currentUser</span> comment:</p>
                    <div class="answer">
                        <form>
                            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                            <div>
                                <label for="username">Username <span class="red">*</span></label>
                                <input type="text" name="username" id="username">
                            </div>
                            <button>Post</button>
                        </form>
                    </div>
    </div>`;
    printComments(data.id);

    const addComment = document.querySelector('.answer form button').addEventListener('click', async (ev) => {
        ev.preventDefault();
        const comment = document.getElementById('comment');
        const username = document.getElementById('username');
        
        if (comment.value != '' && username.value != '') {
            document.querySelector('.topic-content').innerHTML = `
            <div class="topic-title">
                    <div class="topic-name-wrapper">
                        <div class="topic-name">
                            <h2>${title}</h2>
                            <p>Date: <time>${postDate}</time></p>
                        </div>
                        <div class="subscribers">
                            <p>Subscribers: <span>${subscribers}</span></p>
                            <button class="subscribe" style="display:none;">Subscribe</button>
                            <button class="unsubscribe" style="display:none;">Unsubscribe</button>
                        </div>
                    </div>
            </div>
            <div class="answer-comment">
                            <p><span>currentUser</span> comment:</p>
                            <div class="answer">
                                <form>
                                    <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                                    <div>
                                        <label for="username">Username <span class="red">*</span></label>
                                        <input type="text" name="username" id="username">
                                    </div>
                                    <button>Post</button>
                                </form>
                            </div>
            </div>`;

            let now = new Date();
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let hour = ("0" + now.getHours()).slice(-2);
            let minutes = ("0" + now.getMinutes()).slice(-2);
            let seconds = ("0" + now.getSeconds()).slice(-2);
            let postDateCom = now.getFullYear() + "-" + (month) + "-" + (day) + 'T' + (hour) + ':' + (minutes) + ':' + (seconds);

            const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ comment: comment.value, username: username.value, postDate: postDateCom, topicId: data.id, likes: 0 })
            })

            if (response.ok) {
                comment.value = '';
                username.value = '';
            }
        }

        printComments(data.id);
    })

}


async function printComments(topicId) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');

    if (response.ok) {
        const comments = await response.json();
        let answerComment = document.querySelector(".answer-comment");
        let parentDiv = answerComment.parentNode;

        Object.values(comments).filter(com => com.topicId == topicId).sort((a, b) => a.postDate.localeCompare(b.postDate)).forEach(com => {

            const comment = createElement('div', { className: 'comment' },
                createElement('header', { className: 'header' },
                    createElement('p', {},
                        createElement('span', {}, com.username),
                        ' posted on ',
                        createElement('time', {}, com.postDate)
                    )
                ),
                createElement('div', { className: 'comment-main' },
                    createElement('div', { className: 'userdetails' },
                        createElement('img', { src: './static/profile.png', alt: 'avatar' })
                    ),
                    createElement('div', { className: 'post-content' },
                        createElement('p', {}, com.comment)
                    )
                ),
                createElement('div', { className: 'footer' },
                    createElement('p', {},
                        createElement('span', {}, com.likes),
                        ' likes'
                    )
                )
            )



            parentDiv.insertBefore(comment, answerComment);
        })
    }

}