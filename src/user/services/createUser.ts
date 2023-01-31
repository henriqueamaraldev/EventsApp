import { UserCollection } from "../models/entities/userCollection"
import { IPostUserRequest } from "../models/http/request/IPostUserRequest"

export const CreateUser = async (data: IPostUserRequest) => {
    try {

        const teste = await UserCollection.create(data)
        return teste

    } catch (e) {
        console.log(e)
    }
}