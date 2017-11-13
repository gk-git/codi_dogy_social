import mongoose, {Schema} from 'mongoose'

require('../models/user');

const postSchema = Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    imageSrc: {type: String},
    content: {type: String},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    disLikes: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
export default mongoose.model('Post', postSchema);
