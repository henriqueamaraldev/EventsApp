import { Schema } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate'

const UserSchema = new Schema(
    {
        email: {
            type: String,
            searchable: true,
            unique: true
        },
        document: {
            type: String,
            searchable: true,
            unique: true
        },
        password: {
            type: String,
        },
        name: { type: String, searchable: true },
        type: {
            type: String,
            enum: ['participant', 'host']
        },
    },
    {
        timestamps: true,
        collation: {
            locale: 'pt',
            strength: 1
        }
    }
)

UserSchema.plugin(mongooseAggregatePaginate)

export { UserSchema }