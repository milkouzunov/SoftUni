function toggle() {
    let buttonText = document.getElementsByClassName('button')[0].textContent;
    let divElement = document.getElementById('extra');

    if (buttonText === 'More') {
        divElement.style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less'
    }
    if (buttonText === 'Less') {
        divElement.style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }

}