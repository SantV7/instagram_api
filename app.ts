import express, { type Express, type Request, type Response } from 'express';
import { loginRoute } from './src/routes/login.ts';
import type { UserData } from './src/types/users.type.ts';
import { registerRoute } from './src/routes/userRegister.ts';
import { editUserRoute } from './src/routes/editUser.ts';

const app: Express = express();

export let usersDb: UserData[] = [
    {id: 1, username: 'Aivy', password: '96321'},
    {id: 2, username: 'Vy', password: '13579', email: 'exemple@gmail.com'},
    {id: 3, username: 'Vyny', password: '12345'},
];

app.use(express.json());

app.use(loginRoute)
app.use(registerRoute);
app.use(editUserRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Instagram trainning!');
});

export default app;