function validate() {
    let inputEmail = document.getElementById('email');

    inputEmail.addEventListener('change', onBlur);

    function onBlur(ev) {
        let pattern = /[a-z]+@[a-z]+.[a-z]+/;

        if (pattern.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}