import { Router } from 'express';
import { editUser } from '../controllers/editUserController.ts';

export const editUserRoute = Router();

editUserRoute.post('/users/edit-user', editUser);