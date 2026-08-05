import { Router } from 'express';
import { authUserRegister } from '../middlewares/userRegister/authRegister.ts';
import { userRegister } from '../controllers/registerController.ts';

const registerRoute = Router();

registerRoute.post('/users/create', authUserRegister, userRegister);