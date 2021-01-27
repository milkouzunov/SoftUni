function addItem() {
    let ulElement = document.querySelector('#items');
    let inputText = document.querySelector('#newItemText').value;
    let liElement = document.createElement('li');
    liElement.textContent = inputText;
    ulElement.appendChild(liElement);
}