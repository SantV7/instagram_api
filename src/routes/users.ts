import { Router, type Request, type Response } from 'express';

import { usersDb } from '../../app.ts';

const usersRoutes = Router();

usersRoutes.get('/users', (req: Request, res: Response) => {
    res.status(200).json(usersDb)
});
