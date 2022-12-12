const {validationResult} = require('express-validator');
const AuthService = require('../services/auth');
const ApiError = require('../libs/errors/apiError');
const httpStatusCode = require('../libs/constants/http-Status-Codes');

async function register(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(ApiError.BadRequestError('Validation Error', errors.array()));
        }

        const {firstName,lastName, email, password,confirm} = req.body;
        await AuthService.register(firstName,lastName ,email, password, confirm);

        res.status(httpStatusCode.CREATED).json({
            message: 'Registration Success'
        });
    } catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const {email, password} = req.body;
        const user = await AuthService.login(email, password);
        res.status(httpStatusCode.OK).json({...user});
    } catch (err) {
        next(err);
    }
}


module.exports = {
    register,
    login
};