var Helpers = require('../utils/Helpers');
var UserModel = require('../models/UserSchema');

class UserService {

    static async getById(userId) {
        return UserModel.findOne({_id: userId, deleted_at:{$exists: false}})
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static async getByEmail(email) {
        return UserModel.findOne({email: email, deleted_at:{$exists: false}})
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static async getAll() {
        return UserModel.find({deleted_at:{$exists: false}})
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static async create(req) {
        let newUser = new UserModel(UserService.initialize(req));
        return newUser.save()
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static async update(req) {
        const updateUser = UserService.initialize(req);
        return UserModel.findOneAndUpdate(
            {_id: req.params.id, deleted_at:{$exists: false}},
            updateUser, {new: 'true', context: 'query',})
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static async deleteById(userId) {
        return UserModel.findOneAndUpdate(
            {_id: userId, deleted_at:{$exists: false}},
            {$set:{deleted_at:new Date()}},{new: 'true'})
            .catch((err)=>{
                console.error(`Database error: ${err}`);
            });
    };

    static initialize(req){
        return {
            name: req.body.name,
            password: Helpers.generateHash(req.body.password),
            email: req.body.email
        };
    }
}

module.exports = UserService;
