async function attachEvents() {
    let listTitles = document.getElementById('posts');
    let posts = Object.values(await getTitles());

    let loadPostsBtn = document.getElementById('btnLoadPosts').addEventListener('click', () => {

        posts.forEach(post => {
            let option = document.createElement('option');
            option.value = post.id;
            option.textContent = post.title;
            listTitles.appendChild(option);
        });
    })
    
    let viewPostBtn = document.getElementById('btnViewPost').addEventListener('click', async () => {
        let postId = listTitles.value;

        document.getElementById('post-comments').innerHTML = '';

        let url = 'http://localhost:3030/jsonstore/blog/comments';
        let response = await fetch(url);
        let comments = await response.json();
    
        let findComments = Object.values(comments).filter(com => com.postId == postId);
        let findPost = Object.values(posts).find(post => post.id == postId);
        
        document.getElementById('post-title').textContent = findPost.title;
        document.getElementById('post-body').textContent = findPost.body;
        
        findComments.forEach(comment => {
            let liElement = document.createElement('li');
            liElement.id = comment.id;
            liElement.textContent = comment.text;
            document.getElementById('post-comments').appendChild(liElement);
        })
    })
}

attachEvents();

async function getTitles() {

    let url = 'http://localhost:3030/jsonstore/blog/posts';
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

