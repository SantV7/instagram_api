import express, { type Request, type Response, type NextFunction } from 'express';
import type { UserData } from '../../types/login.type.ts';


export function authLogin(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body as UserData;

    if (!username || username.length < 3) {
        return res.status(400).json('Username must be at least 3 characters long')
    };

    if (!password || password.length < 8) {
        return res.status(400).json('Password is required with min 8 characteres');
    };

    

    return next();
}

