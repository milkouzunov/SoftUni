const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/config');
const User = require('../models/User');

async function register({ username, password }) {


    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password.trim(), salt);

    const newUser = new User({ username: username.trim(), password: hash });

    return newUser.save();
}

async function login({ username, password }) {

    let user = await User.findOne({ username: username.trim() });

    if (!user) {
        throw { message: 'Wrong username or password!' }
    }

    let isMatch = await bcrypt.compare(password.trim(), user.password);

    if (!isMatch) {
        throw { message: 'Wrong username or password!' }
    }
    let token = jwt.sign({ _id: user._id }, JWT_SECRET)

    return token;
}

module.exports = {
    register,
    login
}