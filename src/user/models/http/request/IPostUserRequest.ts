import { Address } from "../../../../shared/models/address/address"
import { UserType } from "../../entities/user"

export interface IPostUserRequest {
    email: string
    document: string
    name: string
    password: string
    address: Address
    type: UserType
    sex: string
}