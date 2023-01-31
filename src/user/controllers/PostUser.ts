import { Request, Response } from "express"
import { IPostUserRequest } from "../models/http/request/IPostUserRequest";
import { CreateUser } from "../services/createUser";

export const PostUser = async (req: Request, res: Response) => {
    const body = req.body as IPostUserRequest;

    const userCreated = await CreateUser(body)

    return userCreated
}