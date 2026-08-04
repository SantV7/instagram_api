import { type Request, type Response, type NextFunction } from 'express';
import type { UserRegisterReq } from '../../types/users.type.ts';

export function authLogin(req: Request, res: Response, next: NextFunction) {
    const { username, email, password, confirm_passoword } = req.body as UserRegisterReq;

    if (!username || username.length < 3) {
        return res.status(400).json('Username must be at least 3 characters long')
    };

    if (!password || password.length < 8) {
        return res.status(400).json('Password is required with min 8 characteres');
    };

    

    return next();
}

