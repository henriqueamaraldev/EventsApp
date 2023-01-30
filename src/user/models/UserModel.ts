import { model } from 'mongoose'
import { User } from './User';
import { AggregatePaginatePlugin } from '../../database/mongoose/interfaces/PaginateAggregate';
import { UserSchema } from './UserSchema';

export const PartnersChallengeModel = model<User, UserBaseModel>(
    'users',
    UserSchema,
    'partners-challenges',
)

export interface UserBaseModel extends
    AggregatePaginatePlugin {
}
