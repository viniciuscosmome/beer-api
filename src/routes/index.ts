import { Router } from 'express';
import { authController, generalController } from '../modules';

export const routes = Router();

routes.post('/auth/sign-in', authController.signIn);

routes.get('/', generalController.home);
routes.all('*', generalController.all);
