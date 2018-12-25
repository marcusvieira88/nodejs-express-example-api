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
            required: true,
            unique: true
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

UserSchema.index({deleted_at: 1});
UserSchema.index({email: 1, deleted_at: 1});

module.exports = mongoose.model('User', UserSchema);