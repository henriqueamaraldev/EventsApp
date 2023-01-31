import { mongooseConection } from "./mongoose/connection"

export const databaseConnection = () => {
    try {

        mongooseConection()

    } catch (e) {

        console.log(e, 'Erro ao tentar se conectar com o banco de dados')

    }

}
