function extractText() {
    let items = [...document.getElementsByTagName('li')].map(e => e.textContent);
    document.getElementById('result').value = items.join('\n');
}