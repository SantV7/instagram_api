import { type Request, type Response, type NextFunction } from "express";
import type { DeleteUser } from "../../types/users.type.ts";
import { usersDb } from '../../../app.ts';


export const authDeleteUser = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body as DeleteUser;

    const userIndex = usersDb.findIndex((user) => user.id === id);

    if(!id || id < 0 ) {
        return res.status(400).json({error: 'Is mandatory to have an ID.'})
    };

    if(userIndex === - 1) {
        return res.status(404).json({ error: "User not found." });
    };

    res.locals.userIndex = userIndex


    return next();
}