import { Express } from 'express'
import { UserController } from './user/controllers/UserController'

const userController = new UserController()

const urlBase = '/api/v1/'

export const allRoutes = (server: Express) => {
    server.use(`${urlBase}users`, userController.Routes)
}