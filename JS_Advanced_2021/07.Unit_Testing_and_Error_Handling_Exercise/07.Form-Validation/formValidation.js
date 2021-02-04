function validate() {
    let companyInfo = document.getElementById('companyInfo'); 
    document.getElementById('company').addEventListener('click', () => {
        if(companyInfo.style.display === 'none') {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none'
        }
    })
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confPassword = document.getElementById('confirm-password').value;
        let companyNumber;
        
        let divValid = document.getElementById('valid');

        let validUsername = /^[a-zA-Z0-9]{3,20}$/.test(username);
        let validPassword = /^\w{5,15}$/.test(password) && (password === confPassword);
        let validEmail = /@.*\./.test(email);
        let validCompNumber;
        
        if(!validUsername){
            document.getElementById('username').style.borderColor = 'red';
        } else {
            document.getElementById('username').style.borderColor = '';
        }
        if(!validPassword){
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('confirm-password').style.borderColor = 'red';
        } else {
            document.getElementById('password').style.borderColor = '';
            document.getElementById('confirm-password').style.borderColor = '';
        }
        if(!validEmail){
            document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = '';
        }
        
        if(companyInfo.style.display === 'block') {
            companyNumber = Number(document.getElementById('companyNumber').value);
            validCompNumber = companyNumber > 1000 && companyNumber < 9999
            if(!validCompNumber){
                document.getElementById('companyNumber').style.borderColor = 'red';
            } else {
                document.getElementById('companyNumber').style.borderColor = '';
            }
        }
        
        if(validCompNumber) {
            if(validUsername && validPassword && validEmail && validCompNumber) {
                divValid.style.display = 'block';
            }
        } else {
            if(validUsername && validPassword && validEmail ) {
                divValid.style.display = 'block';
            }
        }
    })
}