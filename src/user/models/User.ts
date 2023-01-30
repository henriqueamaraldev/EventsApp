import { Document } from "mongoose";

export interface User extends Document {
    email: string
    document: string
    name: string
    password: string
    address: Address
    sex: string
    type: UserType
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

enum UserType {
    participant = 'participant',
    host = 'host'
}