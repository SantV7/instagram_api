import express, {  type Request, type Response } from 'express';
import type { UserData } from '../types/login.type.ts';
import { usersDb } from '../../server.ts';



export const userLogin = (req: Request, res: Response) => {
    const { username, password } = req.body as UserData;

    const validatorUser = usersDb.find((user) => {
       return user.username === username && user.password === password
    })

    if(!validatorUser) return res.status(401).json('Username or Password is incorrect')

    return res.status(200).json('Login effectued')
}