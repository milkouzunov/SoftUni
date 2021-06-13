const validator = require('validator');



module.exports = (req, res, next) => {
    let data = req.body;
    if (req.url == '/register') {
        req.usernameErrors = {
            lengthError: validator.isLength(data.username.trim(), {min: 5}),
            onlyEnglishLettersAndNumbers: validator.isAlphanumeric(data.username.trim())
        };
        req.passwordError = validator
            .isStrongPassword(data.password.trim(), {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            });
    }

    if (req.url.includes('create') || req.url.includes('edit') ||  req.url.includes('accessories')) {
        req.nameErrors = {
            lengthError: validator.isLength(data.name.trim(), { min: 5 }),
            invalidCharacters: /^[a-zA-Z0-9 ]*$/.test(data.name)
        };

        req.descriptionErrors = {
            lengthError: validator.isLength(data.description.trim(), { min: 20 }),
            invalidCharacters: /^[a-zA-Z0-9 ]*$/.test(data.description)
        };
        req.urlError = validator.isURL(data.imageUrl.trim(), { protocols: ['http', 'https'] });
    }

    next();
}