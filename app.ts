import express, { type Express, type Request, type Response } from 'express';
import { login } from './src/routes/login.ts';
import type { UserData } from './src/types/users.type.ts';

const app: Express = express();

export let usersDb: UserData[] = [
    {username: 'Aivy', password: '96321'},
    {username: 'Vy', password: '13579'},
    {username: 'Vyny', password: '12345'},
];

app.use(express.json());

app.use(login);

app.get('/', (req: Request, res: Response) => {
    res.send('Instagram trainning!');
});

export default app;