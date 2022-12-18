const UserService = require('../services/UserService');
const httpStatusCodes = require('../libs/constants/http-Status-Codes');

class UserController {
    static async getById(req, res) {
        try {
            const user = await UserService.getById(req.param.id);
            res.status(httpStatusCodes.OK).send(user);
        } catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message);
        }
    }

    static async updateUser(req, res) {
        try {
            const {name, surname, email, age} = req.body;
            const data=await UserService.updateUser(req.body.id, name, surname, email, age);
            res.status(httpStatusCodes.OK).send(data);
        } catch (err) {
            res.status(err.status).send(err.message);
        }
    }
}

module.exports = UserController;