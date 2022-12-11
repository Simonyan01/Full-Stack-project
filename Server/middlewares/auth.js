const jwt = require('../libs/jwt');
const ApiError = require('../libs/errors/apiError');


module.exports = function (req, res, next) {
    try {

        const {authorization} = req.headers;
        if (!authorization) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = jwt.validateToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;
        next();
    } catch (e) {
        next(ApiError.UnauthorizedError());
    }
};