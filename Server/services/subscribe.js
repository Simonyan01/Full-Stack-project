const User = require('../services/user');

class SubscribeService {
    static async pay(id) {
       return  User.updateActive(id);
    }
}

module.exports = SubscribeService;