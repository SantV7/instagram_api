import { Router } from 'express';
import { authUserRegister } from '../middlewares/userRegister/authRegister.ts';
import { userRegister } from '../controllers/registerController.ts';

export const registerRoute = Router();

registerRoute.post('/users/sign-up', authUserRegister, userRegister);