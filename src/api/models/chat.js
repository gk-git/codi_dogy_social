import mongoose, {Schema} from 'mongoose';

const ChatSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [
        {
            message: String,
            meta: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                    },
                    delivered: Boolean,
                    read: Boolean
                }
            ]
        }
    ],
    is_group_message: {type: Boolean, default: false},
    participants: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            delivered: Boolean,
            read: Boolean,
            last_seen: Date
        }
    ]
});
export const Chat = mongoose.model('Chat', ChatSchema);
