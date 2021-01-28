function encodeAndDecodeMessages() {
    let divElements = document.getElementById('main').getElementsByTagName('div');
    
    divElements[0].getElementsByTagName('button')[0].addEventListener('click', (ev) => {
        let textInput = ev.target.parentNode.getElementsByTagName('textarea')[0].value;
        textInput = textInput.split('').map(c => c.charCodeAt(0)+1).map(c => String.fromCharCode(c)).join('');
        divElements[1].getElementsByTagName('textarea')[0].value = textInput;
        ev.target.parentNode.getElementsByTagName('textarea')[0].value = '';
    })
    divElements[1].getElementsByTagName('button')[0].addEventListener('click', () => {
        let textInput = divElements[1].getElementsByTagName('textarea')[0].value;
        textInput = textInput.split('').map(c => c.charCodeAt(0)-1).map(c => String.fromCharCode(c)).join('');
        divElements[1].getElementsByTagName('textarea')[0].value = textInput;
    })
    
}