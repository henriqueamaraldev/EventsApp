import { Address } from "../../../shared/models/address/address"


export interface IUser extends Document {
    email: string
    document: string
    name: string
    password: string
    address: Address
    sex: string
    type: UserType
}

export enum UserType {
    client = 'client',
    host = 'host'
}
/*export class User implements IUser {
    public email: string
    public document: string
    public name: string
    public password: string
    public address: Address
    public sex: string
    public type: UserType

    constructor(email: string, document: string, name: string, password: string, address: Address, sex: string, type: UserType) {
        this.email = email
        this.document = document
        this.name = name
        this.password = password
        this.address = address
        this.sex = sex
        this.type = type
    }

    validate(): boolean {
        //TODO: validate
        return true
    }
}*/