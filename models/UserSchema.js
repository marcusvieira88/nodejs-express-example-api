var mongoose = require('mongoose');

// Define the database model
const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            maxlength: 100,
            minlength: 0,
            required: true
        },
        password:{
            type: String,
            maxlength: 100,
            minlength: 0,
            required: true
        },
        email: {
            type: String,
            maxlength: 100,
            minlength: 0,
            required: true
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

module.exports = mongoose.model('User', UserSchema);
