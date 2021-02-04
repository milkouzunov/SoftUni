function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {
        if(!/[a-z]+@[a-z]+\.[a-z]+/g.test(input.value)){
            input.className = 'error';
        } else {
            input.className = '';
        }
    })
}