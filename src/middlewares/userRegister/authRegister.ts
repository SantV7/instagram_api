import { type Request, type Response, type NextFunction } from 'express';
import type { UserRegisterReq } from '../../types/users.type.js';

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function authUserRegister(req: Request, res: Response, next: NextFunction) {
    const { username, email, password, confirm_password } = req.body as UserRegisterReq;

    if (!username || username.length < 3) {
        return res.status(400).json({error: 'Username must be at least 3 characters long.'})
    };

    if (email && !email_regex.test(email)) {
        return res.status(400).json({error: 'Invalid email format or no exists.'});
    };

    if (!password || password.length < 8) {
        return res.status(400).json({error: 'Password is required with min 8 characters.'});
    };

    if(confirm_password !== password) {
        return res.status(400).json({error: 'The Password and the Confirm-Password must match.'});
    };

    return next();
}

