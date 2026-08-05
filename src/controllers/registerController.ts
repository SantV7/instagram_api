import { type Request, type Response } from 'express';
import type { UserRegisterReq } from '../types/users.type.ts';
import { usersDb } from '../../app.ts';

export const userRegister = (req: Request, res: Response) => {
    const { username, email, password, confirm_password } = req.body as UserRegisterReq;
    
    const uId = usersDb.length === 0 ? 1 : usersDb[usersDb.length -1].id + 1

    const newUser: UserRegisterReq = {
        id: uId,
        username,
        email,
        password,
        confirm_password
    }

    const userExists = usersDb.find((user) => user.email === newUser.email)

    if (userExists) {
        return res.status(400).json({ error: 'O usuário já está cadastrado.' });
    }

    usersDb.push(newUser);
    return res.status(201).json('Usuário criado com sucesso!');

} 