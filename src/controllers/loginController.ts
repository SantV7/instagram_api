import {  type Request, type Response } from 'express';
import type { UserLogin } from '../types/users.type.ts';
import { usersDb } from '../routes/users.ts';



export const userLogin = (req: Request, res: Response) => {
    const { username, password } = req.body as UserLogin;

    const validatorUser = usersDb.find((user) => {
       return user.username === username && user.password === password
    })

    if(!validatorUser) return res.status(401).json('Username or Password is incorrect')

    return res.status(200).json('Login effectued')
}