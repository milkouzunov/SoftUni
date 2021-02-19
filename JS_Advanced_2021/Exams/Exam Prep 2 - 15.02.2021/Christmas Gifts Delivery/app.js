function solution() {
    let giftsList = document.querySelectorAll('.card')[1].getElementsByTagName('ul')[0];
    let sendList = document.querySelectorAll('.card')[2].getElementsByTagName('ul')[0];
    let discardList = document.querySelectorAll('.card')[3].getElementsByTagName('ul')[0];
    let gifts = [];

    document.querySelector('.card div button').addEventListener('click', () => {
        let giftInput = document.querySelector('.card div input').value;
        document.querySelector('.card div input').value = '';
        gifts.push(giftInput);
        giftsList.innerHTML = '';
        gifts.sort((a, b) => a.localeCompare(b)).forEach(gift => {
            let liElement = document.createElement('li');
            liElement.classList.add('gift');
            liElement.textContent = gift;
            let sendBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.id = 'sendButton';
            liElement.appendChild(sendBtn);
            sendBtn.addEventListener('click', send);

            let discardBtn = document.createElement('button');
            discardBtn.textContent = 'Discard';
            discardBtn.id = 'discardButton';
            liElement.appendChild(discardBtn);
            discardBtn.addEventListener('click', discard)

            giftsList.appendChild(liElement);
        });
    })
    function send(e) {
        let liHTML = e.target.parentNode.innerHTML;
        let giftName = liHTML.substring(0, liHTML.indexOf('<'));
        e.target.parentNode.remove();
        gifts.splice(gifts.indexOf(giftName),1);

        let liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = giftName;
        sendList.appendChild(liElement)
    }
    function discard(e) {
        let liHTML = e.target.parentNode.innerHTML;
        let giftName = liHTML.substring(0, liHTML.indexOf('<'));
        e.target.parentNode.remove();
        gifts.splice(gifts.indexOf(giftName),1);

        let liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = giftName;
        discardList.appendChild(liElement)
    }
}