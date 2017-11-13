import mongoose, {Schema} from 'mongoose'

const locationSchema = new Schema({
    label: {type: String, required: true},
    lat: {type: Number, required: true},
    lang: {type: Number, required: true}
});
export default  mongoose.model('Location', locationSchema);