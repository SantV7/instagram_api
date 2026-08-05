import {  type Request, type Response } from 'express';
import type { UserLogin, UserRegisterReq } from '../types/users.type.ts';
import { usersDb } from '../../app.ts';

export const userRegister = (req: Request, res: Response) => {
    const { username, email, password, confirm_password } = req.body as UserRegisterReq;

    const newUser: UserRegisterReq = {
        username,
        email,
        password,
        confirm_password
    }

    if(!newUser) {
        return res.status(400).json({error: 'Error in create a new user'})
    }

    usersDb.push(newUser)

}