import express, { type Express, type Request, type Response } from 'express';
import { login } from './src/routes/login.ts';

const app: Express = express();


app.use(express.json());
app.use(login);

app.get('/', (req: Request, res: Response) => {
    res.send('Instagram training!');
});

export default app;