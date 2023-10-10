import { Router } from 'express';
import { authController, generalController } from '../modules';
import { authorization } from '../middlewares/authorization';

export const routes = Router();

routes.post('/auth/sign-up', authController.signUp);
routes.post('/auth/sign-in', authController.signIn);
routes.post('/auth/refresh', authorization('REFRESH'), authController.refresh);
routes.post('/auth/forgot-password', authController.forgotPassword);

routes.get('/', generalController.home);
routes.all('*', generalController.all);
