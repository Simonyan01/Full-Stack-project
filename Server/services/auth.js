const bcrypt = require('bcrypt');
const User = require('../models/user');
const UserDto = require('../dto/user');
const jwt = require('../libs/jwt');
const ApiError = require('../libs/errors/apiError');


async function register(firstName, lastName, email, password, confirm) {
    const candidate = await User.findUserByEmail(email);
    if (candidate) {
        throw  ApiError.BadRequestError(`User with ${email} address already excist`);
    }
    if (password !== confirm) {
        throw  ApiError.BadRequestError(`password different`);
    }
    const heshPassword = await bcrypt.hash(password, 5);

    const user = await User.create({firstName, lastName, email, password: heshPassword});
    const userDto = new UserDto(user.dataValues);
    const token = jwt.generateToken(userDto);

    return {
        ...token, user: userDto
    };
}


async function login(email, password) {

    const user = await User.findUserByEmail(email);
    if (!user) {
        throw ApiError.BadRequestError(`user with this email ${email} not found`);
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
        throw ApiError.BadRequestError('Wrong password');
    }

    const userDto = new UserDto(user.dataValues);
    const token = jwt.generateToken(userDto);

    return {
        ...token, user: userDto
    };
}


module.exports = {
    register, login
};
