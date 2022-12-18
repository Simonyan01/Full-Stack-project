const ApiError = require('../libs/errors/apiError');
const httpStatusCodes = require('../libs/constants/http-Status-Codes');

module.exports = function (err, res) {

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            message: err.message, errors: err.errors
        });
    }

    return res.status(httpStatusCodes.SERVER_ERROR).json({
        message: 'Unexpected error'
    });
};