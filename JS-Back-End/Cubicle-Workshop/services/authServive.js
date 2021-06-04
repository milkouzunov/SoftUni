const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
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
        throw { message: 'Wrong username or password!' }
    }

    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw { message: 'Password does not match!' }
    }
    let token = jwt.sign({ _id: user._id }, JWT_SECRET)

    return token;
}

module.exports = {
    register,
    login
}