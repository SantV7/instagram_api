import { type Request, type Response } from 'express';
import type { DeleteUser } from '../types/users.type.ts';
import { usersDb } from '../../app.ts';


export const editUser = (req: Request, res: Response) => {
    const { id } = req.body as DeleteUser;

    if(!id) {
        return res.status(400).json({error: 'User ID is mandatory for delete.'})
    }

    const userIndex = usersDb.findIndex((user) => user.id === id);

    if(userIndex === - 1) {
        return res.status(404).json({ error: "User not found." });
    };

    usersDb.splice(userIndex, 1)


    return res.status(200).json({message: 'User successfully deleted.'})
}