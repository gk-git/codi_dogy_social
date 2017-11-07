import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'], lowercase: true
    },
    password: {type: String, select: false},
    username: {type: String, unique: [true, 'Username already exist'], lowercase: true},
    name: String
});

userSchema.pre('save', function (next) {
    let user = this;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

userSchema.path('email').validate(function (email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.');

userSchema.path('username').validate(function (value) {
    return /[0-9]{6,15}[a-zA-Z]/.test(value);
}, 'Invalid username');

userSchema.methods = {
    comparePwd: (password, done) => {
        bcrypt.compare(password, this.password, (err, isMatch) => {
            done(err, isMatch);
        });
    },

    getUserByToken: () => {

    }
}
//
// userSchema.methods.comparePwd = function (password, done) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         done(err, isMatch);
//     });
// };

export default mongoose.model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);
