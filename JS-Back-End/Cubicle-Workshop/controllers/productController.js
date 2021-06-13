const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');

const validate = require('../middlewares/validate');
const isAuthenticated = require('../middlewares/isAuthenticated');
const isAuthorization = require('../middlewares/isAuthorization');

const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(cubes => {
            res.render('home', { title: 'Cubicle', cubes });
        })
        .catch(() => res.status(500).end())
});

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/create', isAuthenticated, validate, async (req, res) => {
    let data = req.body;

    try {
        if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '' || data.difficultyLevel.trim() == '') {
            throw { message: 'All fields is required!' };
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

        data.createdBy = req.user._id
        await productService.create(data);
        res.redirect('/products');
    } catch (err) {
        if (err.code == '11000') {
            err.message = 'The cube name is already exist';
        }

        res.render('create', { title: 'Create Cube Page', err });
    }

})

router.get('/edit/:productId', isAuthenticated, isAuthorization, (req, res) => {
    productService.getById(req.params.productId)
        .then(cube => {
            res.render('edit', { title: 'Edit', cube });
        })
        .catch(() => res.status(500).end());

})

router.post('/edit/:productId', isAuthenticated, isAuthorization, validate, async (req, res) => {
    const data = req.body;

    try {
        if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '' || data.difficultyLevel.trim() == '') {
            throw { message: 'All fields is required!' };
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

        await productService.edit(req.params.productId, data);
        res.redirect('/products');
    } catch (err) {
        const cube = req.body;
        if (err.code == '11000') {
            err.message = 'The username has already been registered, please change the username';
        }
        res.render('edit', { title: 'Edit', cube, err });
    }

});

router.get('/delete/:productId', isAuthenticated, isAuthorization, async (req, res) => {
    const cubeId = req.params.productId;
    try {
        await productService.deleteCube(cubeId);
        res.redirect('/products');
    } catch (err) {
        res.render(`details`, { message: 'Fail delete' });
    }
});


router.get('/details/:productId', isAuthenticated, isAuthorization, (req, res) => {
    const productId = req.params.productId;

    productService.getByIdWithAccessories(productId)
        .then(cube => {
            cube.accessories.map(a => {
                a.productId = productId;
                a.isAuth = cube.createdBy == req.user._id;
                return a;
            })
            res.render('details', { title: 'Details', cube });
        })
        .catch(() => res.status(500).end());

});

router.post('/:productId/:accessoryId/delete', isAuthenticated, isAuthorization, (req, res) => {
    productService.removeAccessory(req.params.productId, req.params.accessoryId)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end());
})


router.get('/:productId/attach', isAuthenticated, isAuthorization, async (req, res) => {
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

router.post('/:productId/attach', isAuthenticated, isAuthorization, (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        .catch(() => res.status(500).end());

})

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;