import { Router } from 'express';
import { deleteUser } from '../controllers/deleteUserController.ts';
import { authDeleteUser } from '../middlewares/deleteUser/authDelete.ts';

const deleteUserRoute = Router();

deleteUserRoute.delete('/users', authDeleteUser, deleteUser);