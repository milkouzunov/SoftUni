import { showHome, setupHome } from './home.js';
import { setupTopicContent, showTopicContent } from './topicContent.js';

const main = document.querySelector('main');


setupSection('.home', setupHome);
setupSection('.topic-content', setupTopicContent)


showHome();


function setupSection(sectionClass, setup) {
    const section = Array.from(document.querySelectorAll(sectionClass));
    setup(main, section);
}


const homeBtn = document.querySelector('#homeBtn').addEventListener('click', (ev) => {
    ev.preventDefault();

    showHome();
})

const topicTitle = document.querySelector('.topic-title').addEventListener('click', (ev) => {
    const title = ev.target.parentNode;
    if(title.classList.contains('normal')){
        ev.preventDefault();
        const currentTheme = title.parentNode;
        
        showTopicContent(currentTheme);
    }
})

