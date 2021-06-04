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

async function getById(id) {
    return await Cube.findById(id).lean();
}

async function getByIdWithAccessories(id) {
    return await Cube.findById(id).populate('accessories').lean();
}

async function getCubeCreator (id) {
   return await Cube.findById(id, {"createdBy": 1})
}

async function create(data) {
    let cube = await new Cube(data);

    return cube.save()
}

async function edit(id, data) {
    return await Cube.updateOne({_id: id}, data);
}

async function deleteCube (id) {
    return await Cube.deleteOne({_id: id});
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
    let cube = await Cube.updateOne({_id: cubeId}, {$pull: {accessories: accessoryId}});
    let accessory = await Accessory.updateOne({_id: accessoryId}, {$pull: {cubes: cubeId}});
    
    return {
        cube,
        accessory
    }
}

module.exports = {
    getAll,
    getById,
    getByIdWithAccessories,
    getCubeCreator,
    create,
    edit,
    deleteCube,
    attachAccessory,
    removeAccessory
}