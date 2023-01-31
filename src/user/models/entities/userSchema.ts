import { Schema } from 'mongoose'
import { timestamp } from '../../../database/mongoose/interfaces/timestamps';

const UserModel = {
    email: {
        type: String,
        required: true,
        searchable: true,
        unique: true
    },
    document: {
        type: String,
        required: true,
        searchable: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: {
        type: String,
        searchable: true,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['participant', 'host']
    },
}

const UserSchema = new Schema(
    UserModel,
    timestamp
);

export { UserSchema }
