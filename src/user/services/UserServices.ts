import mongoose from "mongoose";
import { aggregatePaginate, PaginationOptions } from "../../database/mongoose/interfaces/aggregatePaginate";
import { User } from "../models/entities/user";
import { UserSchema } from "../models/entities/userSchema";
import { IGetUsersRequest } from "../models/http/request/IGetUsersRequest";
import { IPostUserRequest } from "../models/http/request/IPostUserRequest";

export class UserServices {
    private _userCollection = mongoose.model<User>("User", UserSchema);;

    readonly ListUsers = async (request: IGetUsersRequest) => {

        try {
            let paginateOptions = new PaginationOptions(request.page, request.limit, request.sort)
            let users = await aggregatePaginate(this._userCollection, paginateOptions)
            return users

        } catch (e) {
            console.log("Error trying in list users.", e)
        }
    }

    CreateUser = async (data: IPostUserRequest) => {

        try {
            let user = new User(data.email, data.document, data.name, data.password, data.address, data.sex, data.type)
            let userCreation = await this._userCollection.create(user)
            return userCreation

        } catch (e) {
            console.log("Error trying in create user.", e)
        }
    }
}