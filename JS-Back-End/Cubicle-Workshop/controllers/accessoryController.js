const { Router } = require('express');

const accessoryService = require('../services/accessoryService');

const router = Router();

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory'});
});

router.post('/create', async (req, res) => {
    const data = req.body;

    if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '') {
        res.status(500).end();
        throw new Error ('All fields is required');
    }
    try {
        await accessoryService.create(data);
        res.redirect('/products');
    } catch (err) {
        console.error(err);
    }
})





module.exports = router; 