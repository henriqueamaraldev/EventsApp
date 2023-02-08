import { Address } from "../../../shared/models/address/address"
import { Document } from 'mongoose'

export class User extends Document {
    email: string
    document: string
    name: string
    password: string
    address: Address
    sex: string
    type: UserType

    constructor(email: string, document: string, name: string, password: string, address: Address, sex: string, type: UserType) {
        super()
        this.email = email;
        this.document = document;
        this.name = name;
        this.password = password;
        this.address = address;
        this.sex = sex;
        this.type = type;
    }

}

export enum UserType {
    client = 'client',
    host = 'host'
}