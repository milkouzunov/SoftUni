const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    let cubes = productService.getAll(req.query);
    
    res.render('home', { title: 'Cubicle', cubes});
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/create', async (req, res) => {
    const data = req.body;
    if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '' || data.difficultyLevel.trim() == '') {
        return;
    }
    try {
        await productService.create(data);
        res.redirect('/products');
    } catch (err) {
        console.log(err);
    }
    
})

router.get('/details/:id', (req, res) => {
    const productId = req.params.id;

    const cube = productService.getCubeById(productId);

    res.render('details', { title: 'Cubicle', cube });
});

module.exports = router;