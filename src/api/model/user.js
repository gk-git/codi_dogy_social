import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate';
import {valideEmail, websiteUrl} from "../../utils/index";

require('../model/profileImage');
require('../model/location');
let defaultDate = new Date();
defaultDate.setFullYear(defaultDate.getFullYear() - 2);
const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'], lowercase: true, trim: true
    },
    password: {type: String, select: false},
    username: {type: String, unique: [true, 'Username already exist'], lowercase: true, trim: true},
    name: {type: String, required: [true, 'Name is required'], trim: true},
    dogName: {type: String, required: true, trim: true},
    emailVerified: {type: Boolean, default: false},
    token: {type: String, default: ''},
    completeProfile: {type: Boolean, default: false},
    lastLogin: {type: Date, default: '12/10/1990'},
    location: {type: Schema.Types.ObjectId, ref: 'Location'},
    personalData: {type: String, default: '', trim: true},
    gender: {type: String, default: '', trim: true},
    origin: {type: String, default: '', trim: true},
    breed: {type: String, default: '', trim: true},
    dateOfBirth: {type: Date, default: defaultDate},
    createdAt: {type: Date, default: Date.now()},
    images: [{type: Schema.Types.ObjectId, ref: 'ProfileImage'}],
    profileImage: {type: String, default: `${websiteUrl}default_profile.png`},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    filters: {
        location: [Schema.Types.Mixed],
        origin: [Schema.Types.Mixed],
        breed: [Schema.Types.Mixed],
        gender: [Schema.Types.Mixed]
    }
});
userSchema.pre('save', function (next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    console.log('pre save');
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});
userSchema.pre('save', function (next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!(user.year && user.month && user.day)) {
        next();
    }
    user.dateOfBirth = new Date(`${user.year}-${user.month}-${user.day}`);
    next();
});
userSchema.pre('save', function (next) {
    let user = this;
    let completePercentage = 0;
    completePercentage += user.personalData ? 10 : 0;
    completePercentage += user.gender ? 20 : 0;
    completePercentage += user.origin ? 20 : 0;
    completePercentage += user.breed ? 20 : 0;
    completePercentage += user.dateOfBirth ? 10 : 0;
    completePercentage += user.images.length > 1 ? 10 : 0;
    completePercentage += user.profileImage !== websiteUrl + 'default_profile.png' ? 10 : 0;
    // only hash the password if it has been modified (or is new)
    if (completePercentage < 80) {
        user.completeProfile = false;
        next();
    }
    user.completeProfile = true;
    next();
});
userSchema.path('email').validate(function (email) {
    return valideEmail(email);
}, 'The e-mail is invalid.');
userSchema.methods.comparePwd = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};
userSchema.plugin(uniqueValidator);
mongoosePaginate.paginate.options = {
    lean: true,
    limit: 15
};
userSchema.plugin(mongoosePaginate);
export default mongoose.model('User', userSchema);