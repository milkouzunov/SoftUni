const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs').promises;
const path = require('path');

let cubes = require('../db/cubes.json');

function getAll (query) {
    let result = cubes;

    if(query.search) {
        result = result.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()))
    }
    if(query.from) {
        result = result.filter(c => Number(c.difficultyLevel) >= Number(query.from))
    }
    if(query.to) {
        result = result.filter(c => Number(c.difficultyLevel) <= Number(query.to))
    }
    return result;
}

function getCubeById (id) {
    return cubes.find(c => c.id == id);
}

async function create (data) {
    let cube = new Cube(
        uniqid(),
        data.name.trim(),
        data.description.trim(),
        data.imageUrl.trim(),
        data.difficultyLevel.trim()
    )

    cubes.push(cube);

    return fs.writeFile(path.resolve('./db/cubes.json'), JSON.stringify(cubes))
}

module.exports = {
    create,
    getAll,
    getCubeById
}