var UserService = require('../services/UserService');

class UserBusiness {

    static async getById(userId) {
        return await UserService.getById(userId);
    };

    static async getAll() {
        return await UserService.getAll();
    };

    static async create(req) {
        const user = await UserService.getByEmail(req.body.email);
        if(user){
            console.error('User is already registered.', user);
        }
        return await UserService.create(req);
    };

    static async update(req) {
        return await UserService.update(req);
    };

    static async deleteById(userId) {
        return await UserService.deleteById(userId);
    };
}

module.exports = UserBusiness;
