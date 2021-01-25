function solve() {
  let textInput = document.getElementById('input').value.split('.').map(sentence => sentence.trim()).filter(sentence => sentence !== '');
  let textOutput = document.getElementById('output');

  while(textInput.length > 0) {
    let currentParagraph = textInput.splice(0,3).join('.');
    if (currentParagraph.slice(-1) !== '.') {
      currentParagraph += '.'
    }
    let paragraph = document.createElement('p');
    paragraph.textContent = currentParagraph;
    textOutput.appendChild(paragraph);
  }
  
}