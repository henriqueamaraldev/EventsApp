import { Router } from 'express';
import { Request, Response } from "express";
import { IGetUsersRequest } from '../models/http/request/IGetUsersRequest';
import { IPostUserRequest } from '../models/http/request/IPostUserRequest';
import { UserServices } from '../services/UserServices';

export class UserController {
    private readonly router: Router = Router();
    private readonly userService: UserServices = new UserServices();

    private GetUsers = async (req: Request, res: Response) => {

        const body = req.body as IGetUsersRequest
        const users = await this.userService.ListUsers(body)
        res.send(users)
    }

    private PostUser = async (req: Request, res: Response) => {

        const body = req.body as IPostUserRequest;
        const userCreated = await this.userService.CreateUser(body)
        res.send(userCreated)
    }

    public readonly Routes = this.router
        .get('/', this.GetUsers)
        .post('/', this.PostUser)
}
