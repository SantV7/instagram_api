import { type Request, type Response } from 'express';
import { usersDb } from '../../app.ts';


export const deleteUser = (req: Request, res: Response) => {
    const userIndex = res.locals.userIndex

    usersDb.splice(userIndex, 1)

    return res.status(200).json({message: 'User successfully deleted.'})
}