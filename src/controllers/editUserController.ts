import {  type Request, type Response } from 'express';
import type { UserEdit, UpdateUser } from '../types/users.type.ts';
import { usersDb } from '../../app.ts';

export const editUser = (req: Request, res: Response) => {
    const { id, username, email, password } = req.body as UserEdit;

    if(!id) {
        return res.status(400).json({error: 'User ID is mandatory.'})
    }

    const userIndex = usersDb.findIndex((user) => user.id === id);

    if(userIndex === - 1) {
        return res.status(404).json({ error: "User not found." });
    };

    usersDb[userIndex] = {
        ...usersDb[userIndex],
        username,
        email,
        password
    }

    return res.status(200).json({message: 'User successfully edited.'})
}