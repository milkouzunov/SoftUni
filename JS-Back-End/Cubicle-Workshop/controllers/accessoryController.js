const { Router } = require('express');

const accessoryService = require('../services/accessoryService');
const validate = require('../middlewares/validate');

const router = Router();

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' });
});

router.post('/create', validate, async (req, res) => {
    const data = req.body;
    try {
        if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '') {
            throw { message: 'All fields is required' };
        }

        if (!req.nameErrors.lengthError) {
            throw { message: 'Invalid name, minimum length - 5' };
        }

        if (!req.nameErrors.invalidCharacters) {
            throw { message: 'Invalid name, only english letters, digits and whitespace' };
        }

        if (!req.descriptionErrors.lengthError) {
            throw { message: 'Invalid description, minimum length - 20' };
        }

        if (!req.descriptionErrors.invalidCharacters) {
            throw { message: 'Invalid description, only english letters, digits and whitespace' };
        }
        
        if(!req.urlError) {
            throw { message: 'Invalid image URL' };
        }

        await accessoryService.create(data);
        res.redirect('/products');
    } catch (err) {
        if (err.code == '11000') {
            err.message = 'The accessory name is already exist';
        }
        res.render('createAccessory', { title: 'Create Accessory', err });
    }
})





module.exports = router;