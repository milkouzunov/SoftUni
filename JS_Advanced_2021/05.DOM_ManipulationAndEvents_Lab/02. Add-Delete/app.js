function addItem() {
    let ulElement = document.querySelector('#items');
    let inputText = document.querySelector('#newText').value;
    let liElement = document.createElement('li');
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', removeEl)

    function removeEl(ev) {
        deleteBtn.parentNode.remove();
    }
    
    liElement.textContent = inputText;
    liElement.appendChild(deleteBtn);
    ulElement.appendChild(liElement);
}