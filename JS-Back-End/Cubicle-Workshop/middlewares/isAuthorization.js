const productService = require('../services/productService');

module.exports = async (req, res, next) => {
    try {
        const creatorId = (await productService.getCubeCreator(req.params.productId)).createdBy || '';
        if (creatorId == req.user._id) {
            res.locals.isAuthorization = true;
        } else {
            res.locals.isAuthorization = false;
        }

        if((req.url.includes('edit') || req.url.includes('create') || req.url.includes('attach')) && !res.locals.isAuthorization ) {
            return res.redirect('/products');
        }
    } catch (err) {
        console.error(err)
    }

    next();
}