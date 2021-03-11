import { createElement } from './dom.js';

let main;
let section;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export function showHome() {
    main.innerHTML = '';
    section.forEach(sect => {
        main.appendChild(sect);
    });
    printPosts();
}

document.querySelector('.new-topic-border form').addEventListener('click', async (ev) => {
    if (ev.target.classList.contains('cancel')) {
        ev.preventDefault();
        document.getElementById('topicName').value = '';
        document.getElementById('username').value = '';
        document.getElementById('postText').value = '';
    } else if (ev.target.classList.contains('public')) {
        ev.preventDefault();


        const topicName = document.getElementById('topicName');
        const username = document.getElementById('username');
        const postText = document.getElementById('postText');

        if (topicName.value != '' && username.value != '' && postText.value != '') {
            let now = new Date();
            let day = ("0" + now.getDate()).slice(-2);
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let hour = ("0" + now.getHours()).slice(-2);
            let minutes = ("0" + now.getMinutes()).slice(-2);
            let seconds = ("0" + now.getSeconds()).slice(-2);
            let postDate = now.getFullYear() + "-" + (month) + "-" + (day) + 'T' + (hour) + ':' + (minutes) + ':' + (seconds);

            const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topicName: topicName.value, username: username.value, postText: postText.value, postDate, subscribers: 0 })
            })

            if (response.ok) {

                topicName.value = '';
                username.value = '';
                postText.value = '';

                printPosts();
            }
        }

    }
})

async function printPosts() {

    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);

    if (response.ok) {
        const posts = await response.json();
        document.querySelector('.topic-title').innerHTML = '';
        Object.values(posts).sort((a,b) => a.postDate.localeCompare(b.postDate)).forEach(post => {

            const element = createElement('div', { className: 'topic-container' },
                createElement('div', { className: 'topic-name-wrapper' },
                    createElement('div', {id: post._id, className: 'topic-name' },
                        createElement('a', { className: 'normal', href: '#' },
                            createElement('h2', {}, post.topicName)
                        ),
                        createElement('div', { className: 'columns' },
                            createElement('div', {},
                                createElement('p', {}, 'Date: ',
                                    createElement('time', {}, post.postDate)
                                ),
                                createElement('div', { className: 'nick-name' },
                                    createElement('p', {}, 'Username: ',
                                        createElement('span', {}, post.username)
                                    )
                                )
                            ),
                            createElement('div', { className: 'subscribers' },
                                createElement('button', { className: 'subscribe', style: "display:none;" }, 'Subscribe'),
                                createElement('p', {}, 'Subscribers: ',
                                    createElement('span', {}, post.subscribers)
                                )
                            )
                        )
                    )
                )
            )
            document.querySelector('.topic-title').appendChild(element);
        });
    }
}

/*
<div class="topic-container">
                    <div class="topic-name-wrapper">
                        <div class="topic-name">
                            <a href="#" class="normal">
                                <h2>Angular 10</h2>
                            </a>
                            <div class="columns">
                                <div>
                                    <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                                    <div class="nick-name">
                                        <p>Username: <span>David</span></p>
                                    </div>
                                </div>
                                <div class="subscribers">
                                    <!-- <button class="subscribe">Subscribe</button> -->
                                    <p>Subscribers: <span>456</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
*/