import { Express } from 'express'
import { UserRoutes } from './user/controllers'

const urlBase = '/api/v1'

export const allRoutes = (server: Express) => {
    server.use(`${urlBase}/users`, UserRoutes)
}