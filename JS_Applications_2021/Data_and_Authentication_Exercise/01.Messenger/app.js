function attachEvents() {
   getMessages ()
   
    document.getElementById('submit').addEventListener('click', sendMessage)
    document.getElementById('refresh').addEventListener('click', getMessages)
}

attachEvents();

async function getMessages () {
    let url = `http://localhost:3030/jsonstore/messenger`;

    let response = await fetch(url)
    const data = await response.json();
    
    const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
    document.getElementById('messages').value = messages;
}

async function sendMessage () {
    let url = `http://localhost:3030/jsonstore/messenge`;
    let author = document.querySelector('[name="author"]').value;
    let content = document.querySelector('[name="content"]').value;
    if(author !== '' && content !== '') {

        
        let response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({author, content})
        })
        const data = await response.json();
        console.log(data);
    }
}