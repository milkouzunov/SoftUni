async function lockedProfile() {
    let profileInfo = await getData();
    console.log(profileInfo);
    let main = document.getElementById('main');
    main.innerHTML = '';
    Object.values(profileInfo).forEach(profile => {
        let counterPr = 1;
        let createProfile = createElement('div', { className: 'profile' },
            createElement('img', { src: './iconProfile2.png', className: 'userIcon' }),
            createElement('label', {}, 'Lock'),
            createElement('input', { type: 'radio', name: `user${counterPr}Locked`, value: 'lock', onclick: lockProfile}),
            createElement('label', {}, 'Unlock'),
            createElement('input', { type: 'radio', name: `user${counterPr}Locked`, value: 'unlock', onclick: unlockProfile}),
            createElement('br', {}),
            createElement('hr', {}),
            createElement('label', {}, 'Username'),
            createElement('input', { type: 'text', name: `user${counterPr}Username`, value: profile.username, disabled: "disabled", readonly: 'readonly' }),
            createElement('div', { id: `user${counterPr}HiddenFields` },
                createElement('hr', {}),
                createElement('label', {}, 'Email:'),
                createElement('input', { type: 'email', name: `user${counterPr}Email`, value: profile.email, disabled: "disabled", readonly: 'readonly' }),
                createElement('label', {}, 'Age:'),
                createElement('input', { type: 'age', name: `user${counterPr}Age`, value: profile.age, disabled: "disabled", readonly: 'readonly' })),
            createElement('button', {onclick: showMore, disabled: true}, 'Show more'))
        main.appendChild(createProfile);
        counterPr++;
    })


}

async function getData() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';

    let response = await fetch(url);
    let data = await response.json();

    return data;
}

function lockProfile(e) {
    
    e.target.parentNode.getElementsByTagName('button')[0].disabled = true;
    
}
function unlockProfile(e) {
    
    e.target.parentNode.getElementsByTagName('button')[0].disabled = false;
    
}
function showMore(e) {

    if(e.target.parentNode.getElementsByTagName('div')[0].style.display == 'block') {
        e.target.parentNode.getElementsByTagName('div')[0].style.display = 'none';
    } else {
        e.target.parentNode.getElementsByTagName('div')[0].style.display = 'block';
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