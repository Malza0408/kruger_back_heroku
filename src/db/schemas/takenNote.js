import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const TakenNoteSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        fromUser: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        toUser: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        check: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const TakenNoteModel = model('TakenNote', TakenNoteSchema);

export { TakenNoteModel };
