const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
module.exports = function () {
    return async (req, res, next) => {
        let token = req.cookies['Auth']
        if(token) {
            try {
                let decoded = await jwt.verify(token, JWT_SECRET);
                req.user = {_id: decoded._id};
                res.locals.user = {_id: decoded._id};
            } catch (err) {
                res.clearCookie('Auth');
                console.error(err);
            }
        }

        next();
    };
}