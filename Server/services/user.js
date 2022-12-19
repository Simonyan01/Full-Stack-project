const User = require('../models/user');

class UserService {
    static async getById(id) {
        return User.findByPk(id);
    }

    static async updateUser(userId, name, surname, email, age) {
        return User.update({name, surname, email, age}, {returning: true, where: {id: userId}});
    }
    static async updateActive(id){
        return User.update({active:true,active_time:new Date()}, {returning: true, where: {id}});
    }
}
module.exports=UserService
