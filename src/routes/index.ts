import { Router } from 'express';
import { authController, generalController } from '../modules';
import { authorization } from '../middlewares/authorization';
import { beersController } from '../modules/beers/beers.controller';

export const routes = Router();

routes.post('/auth/sign-up', authController.signUp);
routes.post('/auth/sign-in', authController.signIn);
routes.post('/auth/refresh', authorization('REFRESH'), authController.refresh);
routes.post('/auth/forgot-password', authController.forgotPassword);
routes.put(
  '/auth/set-password',
  authorization('FORGOT_PASSWORD'),
  authController.setPassword,
);

routes.get(
  '/beers/:filter',
  authorization('ACCESS'),
  beersController.singleBeer,
);

routes.get('/', generalController.home);
routes.all('*', generalController.all);
