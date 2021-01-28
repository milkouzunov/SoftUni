function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let outputMenu = document.getElementById('menu');
    let optionElement = document.createElement('option');
    optionElement.value = inputValue;
    optionElement.textContent = inputText;
    outputMenu.appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}