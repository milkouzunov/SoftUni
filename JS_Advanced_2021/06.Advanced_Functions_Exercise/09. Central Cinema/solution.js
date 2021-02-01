function solve() {
    const container = document.querySelector('#container').children;
    const inputs = Array.from(container).slice(0, container.length - 1);
    const onScreenBtn = Array.from(container).slice(container.length - 1)[0];
    const movieOnScreen = document.querySelector('#movies>ul');

    onScreenBtn.addEventListener('click', onScreen);

    function onScreen(ev) {
        ev.preventDefault();
        let movieName = inputs[0].value;
        let movieHall = inputs[1].value;
        let movieTicketPrice = Number(inputs[2].value);

        if (!movieName || !movieHall || !movieTicketPrice) { return }

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        let span = document.createElement('span');
        let strong = document.createElement('strong');
        let strong1 = document.createElement('strong');
        let li = document.createElement('li');
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.placeholder = 'Tickets Sold'
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archive);
        span.textContent = movieName;
        strong.textContent = `Hall: ${movieHall}`;

        li.appendChild(span);
        li.appendChild(strong);

        strong1.textContent = movieTicketPrice.toFixed(2);

        div.appendChild(strong1);
        div.appendChild(input);
        div.appendChild(archiveBtn);
        li.appendChild(div);
        movieOnScreen.appendChild(li);


    }

    function archive(ev) {
        
        let movieName = ev.target.parentNode.parentNode.querySelector('span').textContent;
        let moviePrice = Number(ev.target.parentNode.parentNode.querySelector('div strong').textContent);
        let ticketsSold = Number(ev.target.parentNode.parentNode.querySelector('div input').value);
        if (ticketsSold == '') { return };

        ev.target.parentNode.parentNode.remove();

        let liElement = document.createElement('li');
        let spanElement = document.createElement('span');
        let strongElement = document.createElement('strong');
        let deleteBtn = document.createElement('button');

        spanElement.textContent = movieName;
        strongElement.textContent = `Total amount: ${(moviePrice * ticketsSold).toFixed(2)}`;
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', (ev) => {
            ev.target.parentNode.remove();
        })
        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(deleteBtn);

        document.querySelector('#archive ul').appendChild(liElement);

    }
    
    document.querySelector('#archive>button').addEventListener('click', (ev) => {
        Array.from(ev.target.parentNode.querySelectorAll('ul li')).map(li => li.remove());
    })
}