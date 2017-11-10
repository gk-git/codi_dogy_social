import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';
import {valideEmail} from "../../utils/index";
import ProfileImage from '../model/profileImage'
const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'], lowercase: true
    },
    password: {type: String, select: false},
    username: {type: String, unique: [true, 'Username already exist'], lowercase: true},
    name: {type: String, required: [true, 'Name is required']},
    dogName: {type: String, required: true},
    emailVerified: {type: Boolean, default: false},
    token: {type: String, default: ''},
    completeProfile: {type: Boolean, default: false},
    lastLogin: {type: Date, default: '12/10/1990'},
    location: {type: String, default: ''},
    personalData: {type: String, default: ''},
    origin: {type: String, default: ''},
    dateOfBirth: {type: String, default: ''},
    age: {type: String, default: ''},
    createdAt: {type: Date, default: Date.now()},
    images: [{type: Schema.Types.ObjectId, ref: 'ProfileImage'}]

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
    return valideEmail(email);
}, 'The e-mail is invalid.');
//
// userSchema.methods = {
//     comparePwd: (password, done) => {
//         console.log('password =>', password);
//         console.log('this.password ', this.password);
//         bcrypt.compare(password, this.password, (err, isMatch) => {
//             done(err, isMatch);
//         });
//     }
// }

userSchema.methods.comparePwd = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};
// userSchema.methods.
userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);
// module.exports = mongoose.model('User', userSchema);
