const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    }
});

const UserSouth = mongoose.model('south', userSchema);
module.exports = UserSouth;