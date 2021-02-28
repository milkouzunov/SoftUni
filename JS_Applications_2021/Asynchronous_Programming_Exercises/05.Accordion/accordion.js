async function solution() {
    let titles = await getTitles();
    let section = document.getElementById('main');
    
    Object.values(titles).forEach(title => {
        let accordion = createElement('div', {className: 'accordion'},
        createElement('div', {className: 'head'},
            createElement('span', {}, title.title),
            createElement('button', {id: title._id, className: 'button', onclick: more}, 'More'))
        )
        section.appendChild(accordion); 
    })
}

async function getTitles() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(url);
    let titles = await response.json();

    return titles;
}

async function more(e) {
    let accordion = e.target.parentNode.parentNode;
    
    if(e.target.parentNode.parentNode.children.length == 1) {
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/` + e.target.id;
        let response = await fetch(url);
        let content = await response.json();
        
        let divExtra = createElement('div', {className: 'extra'},
            createElement('p',{}, content.content));
        accordion.appendChild(divExtra);

        e.target.parentNode.parentNode.getElementsByClassName('extra')[0].style.display = 'block';
        e.target.textContent = 'Less';
    } else {
        if(e.target.textContent == 'Less') {
            e.target.parentNode.parentNode.getElementsByClassName('extra')[0].style.display = 'none';
            e.target.textContent = 'More';
        } else if (e.target.textContent == 'More'){
            e.target.parentNode.parentNode.getElementsByClassName('extra')[0].style.display = 'block';
            e.target.textContent = 'Less';
        }
    }


}


function createElement(type, attributes = {}, ...content) {
    let result = document.createElement(type);

    for (const attr in attributes) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2), attributes[attr]);
        } else {
            result[attr] = attributes[attr];
        }
    }

    content.forEach(e => {
        if (typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });
    return result;
}