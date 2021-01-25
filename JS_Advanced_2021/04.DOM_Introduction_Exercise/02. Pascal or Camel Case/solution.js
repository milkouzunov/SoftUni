function solve() {
  let text = document.getElementById('text').value;
  let textType = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (textType == 'Camel Case') {
    result.textContent = toCamelCase(text);
  } else if (textType == 'Pascal Case') {
    result.textContent = toPascalCase(text);
  } else {
    result.textContent = 'Error!'
  }

  function toCamelCase(str) {
    let containmentArea = [];
    let splitString = str.split(' ');
    let firstWord = splitString.splice(0, 1)[0].toLowerCase();
    containmentArea.push(firstWord);

    for (let word of splitString) {
      let splitWords = word.split('');
      let capitalLetter = splitWords[0].toUpperCase();
      let lettersAfterFirst = splitWords.slice(1).map(l => l.toLowerCase());
      let joinedWord = [capitalLetter].concat(lettersAfterFirst).join('');

      containmentArea.push(joinedWord);
    }
    return containmentArea.join('');
  }

  function toPascalCase(str) {
    let containmentArea = [];
    let splitString = str.split(' ');

    for (let word of splitString) {
      let splitWords = word.split('');
      let capitalLetter = splitWords[0].toUpperCase();
      let lettersAfterFirst = splitWords.slice(1).map(l => l.toLowerCase());
      let joinedWord = [capitalLetter].concat(lettersAfterFirst).join('');

      containmentArea.push(joinedWord);
    }
    return containmentArea.join('');
  }
}