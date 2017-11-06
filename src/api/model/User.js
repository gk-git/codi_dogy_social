import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const Schema = mongoose.Schema;
/**
 * User Schema
 */
const UserSchema = new Schema({
    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, select: false, required: true},
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    verified: {type: Boolean, default: false},
});


UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});


/**
 * Validations
 */

// the below 5 validations only apply if you are signing up traditionally

UserSchema.path('name').validate(function (name) {
    return name.length;
}, 'Name cannot be blank');

UserSchema.path('email').validate(function (email) {
    return email.length;
}, 'Email cannot be blank');

UserSchema.path('email').validate(function (email, fn) {
    const User = mongoose.model('User');

    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('email')) {
        User.find({email: email}).exec(function (err, users) {
            fn(!err && users.length === 0);
        });
    } else fn(true);
}, 'Email already exists');

UserSchema.path('username').validate(function (username) {
    return username.length;
}, 'Username cannot be blank');


UserSchema.methods.comparePwd = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};
const Users = mongoose.model('User', UserSchema);

export default Users;

