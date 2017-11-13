import mongoose, {Schema} from 'mongoose'

const profileImageSchema = Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    imageSrc: {type: String}
});
export default mongoose.model('ProfileImage', profileImageSchema);
