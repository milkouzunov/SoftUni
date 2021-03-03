getBooks()
document.getElementById('loadBooks').addEventListener('click', getBooks);

async function getBooks() {
    let tbody = document.querySelector('#tbody')
    const url = 'http://localhost:3030/jsonstore/collections/books';

    const response = await fetch(url);
    const data = await response.json();
    tbody.innerHTML = '';

    for (const bookId in data) {
        const { title, author } = data[bookId]
        let tr = createElement('tr', {},
            createElement('td', {}, title),
            createElement('td', {}, author),
            createElement('td', {},
                createElement('button', { id: bookId, onclick: editBook }, 'Edit'),
                createElement('button', { id: bookId, onclick: deleteBook }, 'Delete')
            )
        );
        tbody.appendChild(tr);

    }


}

document.querySelector('form button').addEventListener('click', addBook)

async function addBook(ev) {
    ev.preventDefault();
    if (document.querySelector('form button').textContent == 'Submit') {

        const url = `http://localhost:3030/jsonstore/collections/books/`;
        let title = document.querySelector('[name="title"]').value;
        let author = document.querySelector('[name="author"]').value;
        
        if (title !== '' && author !== '') {
            
            await fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            });
            
            
            document.querySelector('[name="title"]').value = '';
            document.querySelector('[name="author"]').value = '';
            
            getBooks();
        }
    }
}


async function editBook(ev) {
    ev.preventDefault();

    let h3 = document.querySelector('form h3');
    h3.textContent = 'Edit FORM'
    document.querySelector('form button').textContent = 'Save';

    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/` + ev.target.id);
    const book = await response.json();
    document.querySelector('[name="title"]').value = book.title;
    document.querySelector('[name="author"]').value = book.author;


    if (document.querySelector('form button').textContent == 'Save') {

        document.querySelector('form button').addEventListener('click', async (e) => {
            e.preventDefault();

            const url = `http://localhost:3030/jsonstore/collections/books/` + ev.target.id;
            let title = document.querySelector('[name="title"]').value;
            let author = document.querySelector('[name="author"]').value;

            if (title !== '' && author !== '') {

                await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ title, author })
                });

                h3.textContent = 'FORM'
                document.querySelector('form button').textContent = 'Submit';

                document.querySelector('[name="title"]').value = '';
                document.querySelector('[name="author"]').value = '';

                getBooks();
            }

        })
    }

}

async function deleteBook(ev) {
    await fetch(`http://localhost:3030/jsonstore/collections/books/${ev.target.id}`, {
        method: 'delete'
    });
    getBooks()
}


function createElement(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}