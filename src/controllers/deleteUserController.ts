import { type Request, type Response } from 'express';
import type { DeleteUser } from '../types/users.type.ts';
import { usersDb } from '../../app.ts';


export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.body as DeleteUser;

    const userIndex = usersDb.findIndex((user) => user.id === id);

    usersDb.splice(userIndex, 1)

    return res.status(200).json({message: 'User successfully deleted.'})
}