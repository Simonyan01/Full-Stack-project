const httpStatusCodes = require('../constants/http-Status-Codes');

class ApiError extends Error {
    status;
    errors;

    constructor(status, message) {
        super(message);
        this.status = status;

    }

    static UnauthorizedError() {
        return new ApiError(httpStatusCodes.UNAUTHORIZED, 'User is not authorized');
    }

    static BadRequestError(message) {
        return new ApiError (httpStatusCodes.BAD_REQUEST,message);
    }
}

module.exports = ApiError;