import { Router } from 'express'
import { GetUsers } from './GetUsers'

const Routes = Router()

export const UserRoutes = Routes.get('/', GetUsers)