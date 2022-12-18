const { validationResult } = require('express-validator');
const AuthService = require('../services/auth');
const ApiError = require('../libs/errors/apiError');
const httpStatusCode = require('../libs/constants/http-Status-Codes');

async function register(req, res) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw (ApiError.BadRequestError('Validation Error', errors.array()));
        }

        const { firstName, lastName, email, password, confirm } = req.body;
        await AuthService.register(firstName, lastName, email, password, confirm);

        res.status(httpStatusCode.CREATED).json({
            ...user
        });
    } catch (err) {
        res.status(err.status).send(err.message);
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await AuthService.login(email, password);
        res.status(httpStatusCode.OK).json({ ...user });
    } catch (err) {
        res.status(err.status).send(err.message);
    }
}


module.exports = {
    register,
    login
};