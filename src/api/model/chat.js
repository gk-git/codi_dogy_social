import mongoose, {Schema} from 'mongoose';

let connectedUserSchema = new Schema({
    user_id: {type: String, required: true},
    user_name: {type: String, required: true},
    socket_id: {type: String, required: true},
});

const RoomSchema = new Schema({
    room_name: {
        type: String,
        require: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    unique_id: {
        type: String
    },
    connected_user: [connectedUserSchema]
});


export {RoomSchema};
// export default mongoose.model('Room', RoomSchema);


const MessageSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String,
        require: true
    },
    user_name: {
        type: String,
        require: true
    },
    room_unique_id: {
        type: String,
        require: true
    }
});

export {MessageSchema};
// export default mongoose.model('Message', MessageSchema);