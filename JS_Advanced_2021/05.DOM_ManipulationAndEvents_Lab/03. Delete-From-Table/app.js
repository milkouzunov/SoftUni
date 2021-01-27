function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    let inputText = document.querySelector('input').value;
    let resultDiv = document.querySelector('#result');
    let deleted = false;
    for (let email of emails) {
        if (email.textContent == inputText) {
            email.parentNode.remove();
            resultDiv.textContent = 'Deleted.'
            deleted = true;
        }
    }
    if (!deleted) {
        resultDiv.textContent = 'Not found.';
   }
}