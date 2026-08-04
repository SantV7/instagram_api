import type { UserData } from '../types/login.type.ts';
import { Router, type Request, type Response } from 'express';

let usersDb: UserData[] = [
    {username: 'Aivy', password: '96321'},
    {username: 'Vy', password: '13579'},
    {username: 'Vyny', password: '12345'},
];

const usersRoutes = Router();

usersRoutes.get('users', (req: Request, res: Response) => {
    res.status(200).json(usersDb)
});





// CRUD