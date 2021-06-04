const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');

const isAuthenticated = require('../middlewares/isAuthenticated');
const isAuthorization = require('../middlewares/isAuthorization');

const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(cubes => {
            res.render('home', { title: 'Cubicle', cubes});
        })
        .catch(() => res.status(500).end())
});

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/create', isAuthenticated, async (req, res) => {
    let data = req.body;
    if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '' || data.difficultyLevel.trim() == '') {
        throw new Error('All fields is required!');
    }
    data.createdBy = req.user._id
    try {
        await productService.create(data);
        res.redirect('/products');
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }

})

router.get('/edit/:productId',isAuthenticated, isAuthorization, (req, res) => {
    productService.getById(req.params.productId)
        .then(cube => {
            res.render('edit', { title: 'Edit', cube });
        })
        .catch(() => res.status(500).end());

})

router.post('/edit/:productId',isAuthenticated, isAuthorization, async (req, res) => {
    const data = req.body;
    if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '' || data.difficultyLevel.trim() == '') {
        throw new Error('All fields is required!');
    }
    productService.edit(req.params.productId, data)
        .then(() => res.redirect('/products'))
        .catch(err => {
            const cube = req.body;
            res.render('edit', { title: 'Edit', cube, err });
        })

});

router.get('/delete/:productId',isAuthenticated, isAuthorization, async (req, res) => {
    const cubeId = req.params.productId; 
    try {
        await productService.deleteCube(cubeId);
        res.redirect('/products');
    } catch (err) {
        res.render(`details`, { message: 'Fail delete' })
    }
});


router.get('/details/:productId',isAuthenticated, isAuthorization, (req, res) => {
    const productId = req.params.productId;

    productService.getByIdWithAccessories(productId)
        .then(cube => {
            cube.accessories.map(a => a.productId = productId)
            res.render('details', { title: 'Details', cube });
        })
        .catch(() => res.status(500).end());

});

router.post('/:productId/:accessoryId/delete',isAuthenticated, isAuthorization, (req, res) => {
    productService.removeAccessory(req.params.productId, req.params.accessoryId)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end())
})


router.get('/:productId/attach',isAuthenticated, isAuthorization, async (req, res) => {
    let cube = await productService.getById(req.params.productId);

    let accessories = await accessoryService.getAllbyParam({
        "$match": {
            "_id": { "$nin": cube.accessories }
        }
    },
        {
            "$project": {
                _id: 1,
                name: 1,
            }
        });

    res.render('attachAccessory', { title: 'Attach Accessory', cube, accessories });
})

router.post('/:productId/attach',isAuthenticated, isAuthorization, (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end());

})

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;