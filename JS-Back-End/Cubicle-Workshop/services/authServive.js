const bcrypt = require('bcrypt');

const User = require('../models/User');

async function register({ username, password }) {
    //TODO: Check if username exists

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hash });

    return newUser.save();
}

async function login({ username, password }) {

    let user = await User.findOne({ username });

    if (!user) {
        throw { message: 'Username and password don\'t match!' }
    }

}

module.exports = {
    register,
    login
}