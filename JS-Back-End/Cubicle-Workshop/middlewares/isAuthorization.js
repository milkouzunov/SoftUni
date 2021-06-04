const productService = require('../services/productService');

module.exports = async (req, res, next) => {
    try {
        const creatorId = (await productService.getCubeCreator(req.params.productId)).createdBy || '';
        if (creatorId == req.user._id) {
            res.locals.isAuthorization = true;
        } else {
            res.locals.isAuthorization = false;
            throw { message: 'Your not creator' }
        }
    } catch (err) {
        console.error(err)
    }

    next();
}