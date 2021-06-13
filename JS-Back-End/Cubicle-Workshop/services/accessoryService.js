const Accessory = require('../models/Accessory');

function getAllbyParam(...params) {
    return Accessory.aggregate(params)
}

function create(data) {

    let accessory = new Accessory({ name: data.name.trim(), description: data.description.trim(), imageUrl: data.imageUrl.trim() });

    return accessory.save();
}


module.exports = {
    create,
    getAllbyParam
}