import { Router } from 'express'
import { GetUsers } from './GetUsers'
import { PostUser } from './PostUser'

const Routes = Router()

export const UserRoutes = Routes
    .get('/', GetUsers)
    .post('/', PostUser)
