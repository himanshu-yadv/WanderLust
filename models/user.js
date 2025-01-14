const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
    //Username aur password password-local-Mongoose automatically define and save kr dega hme alag se schema define krne ki zaroorart nhi
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);