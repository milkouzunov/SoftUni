function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getPhonebook);
    document.getElementById('btnCreate').addEventListener('click', create)
}


attachEvents();

async function getPhonebook () {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('phonebook').innerHTML = '';

    Object.values(data).forEach(ph => {
        let liElement = document.createElement('li');
        liElement.textContent = `${ph.person}: ${ph.phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = ph._id;
        liElement.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', deletePh);

        document.getElementById('phonebook').appendChild(liElement);
    });
}

async function create() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    if(person !== '' && phone !== '') {
        
        await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({person, phone})
        })
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';


        getPhonebook ()
    } 

}

async function deletePh(e) {

    const url = `http://localhost:3030/jsonstore/phonebook/` + e.target.id;

    await fetch(url, {
        method: 'delete'
    })
    
    getPhonebook ()
}