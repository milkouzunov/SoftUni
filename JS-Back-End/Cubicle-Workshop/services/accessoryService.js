const Accessory = require('../models/Accessory');

function getAllbyParam (...params) {
    return Accessory.aggregate( params )
}

function create (data) {
    let accessory = new Accessory(data);

    return accessory.save();
}


module.exports = {
    create,
    getAllbyParam
}