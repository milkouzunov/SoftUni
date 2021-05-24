const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

function getAll() {
    return  Cube.find().lean();
}

function getById(id) {
    return Cube.findById(id).lean();
}

function getByIdWithAccessories(id) {
    return Cube.findById(id).populate('accessories').lean();
}

function create (data) {
    let cube = new Cube(data);

    return cube.save()
}

async function attachAccessory (productId, accessoryId) {
    let product = await Cube.findById(productId);
    let accessory = await Accessory.findById(accessoryId);

    product.accessories.push(accessory);
    return product.save();

}

module.exports = {
    getAll,
    getById,
    getByIdWithAccessories,
    create,
    attachAccessory,
}