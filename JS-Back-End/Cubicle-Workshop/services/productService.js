const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

async function getAll(query) {
    let cube = await Cube.find().lean();

    if (query.search) {
        cube = await Cube.find({ 'name': { '$regex': query.search, '$options': 'i' } }).lean();
    }
    if (query.from && query.to) {
        cube = await Cube.find({
            'difficultyLevel': {
                $gte: query.from,
                $lte: query.to
            }
        }).lean();
        return cube;
    }
    if (query.from) {
        cube = await Cube.find({ 'difficultyLevel': { '$gte': query.from } }).lean();
    }
    if (query.to) {
        cube = await Cube.find({ 'difficultyLevel': { '$lte': query.to } }).lean();
    }
    return cube;
}

function getById(id) {
    return Cube.findById(id).lean();
}

function getByIdWithAccessories(id) {
    return Cube.findById(id).populate('accessories').lean();
}

function create(data) {
    let cube = new Cube(data);

    return cube.save()
}

async function edit(id, data) {
    return await Cube.updateOne({_id: id}, data);
}

async function attachAccessory(cubeId, accessoryId) {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);
    accessory.cubes.push(cube._id)
    cube.accessories.push(accessory);
    return {
       cube: cube.save(),
       accessory: accessory.save()
    };

}

async function removeAccessory (cubeId, accessoryId) {
    return await Cube.updateOne({_id: cubeId}, {$pull: {accessories: accessoryId}});
    
}

module.exports = {
    getAll,
    getById,
    getByIdWithAccessories,
    create,
    edit,
    attachAccessory,
    removeAccessory
}