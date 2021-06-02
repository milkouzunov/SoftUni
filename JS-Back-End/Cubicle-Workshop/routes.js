const { Router } = require('express');

const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController')

const router = Router();

router.get('/', (req,res) => {
    res.redirect('/products')
})
router.use('/products', productController);
router.use('/accessories', accessoryController);
router.use('/auth', authController)

router.get('*', (req, res) => {
    res.render('404', {});
})

module.exports = router;