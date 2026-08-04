import { Router } from 'express';
import { authLogin } from '../middlewares/login/authLogin.ts';
import { userLogin } from '../controllers/loginController.ts';

export const login = Router();

login.post('/users/login', authLogin , userLogin);