import { mongooseConection } from "./mongoose/connection"

export const databaseConnection = () => {
    mongooseConection()
}