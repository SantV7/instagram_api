import { Router } from 'express';
import { authLogin } from '../middlewares/login/authLogin.ts';
import { userLogin } from '../controllers/loginController.ts';

export const loginRoute = Router();

loginRoute.post('/users/sign-in', authLogin, userLogin);