import { Document } from "mongoose";

export interface UserSchema extends Document {
    email: string
    document: string
    name: string
    password: string
    address: Address
    sex: string
}

interface Address {
    country: string
    region: string
    state: string
    city: string
    neighboorhood?: string
    street: string
    number: string
    complement: string
}