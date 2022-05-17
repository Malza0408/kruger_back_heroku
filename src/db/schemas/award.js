import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const AwardSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        user_id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const AwardModel = model('Award', AwardSchema);

export { AwardModel };
