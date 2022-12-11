const httpStatusCodes = require('../constants/http-Status-Codes');

class ApiError extends Error {
    statusCode;
    errors;

    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;

    }

    static UnauthorizedError() {
        return new ApiError(httpStatusCodes.UNAUTHORIZED, 'Doctor is not authorized');
    }

    static BadRequestError(message) {
        return new ApiError (httpStatusCodes.BAD_REQUEST, message);
    }
}

module.exports = ApiError;