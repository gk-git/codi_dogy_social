import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';
import {valideEmail} from "../../utils/index";

const profileImageSchema = Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    imageSrc: {type: String}
});
export default mongoose.model('ProfileImage', profileImageSchema);
// module.exports = mongoose.model('User', userSchema);
