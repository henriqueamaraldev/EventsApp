import { Request, Response } from "express"

export const GetUsers = (req: Request, res: Response) => {
    res.send('HELLO WORLD')
}