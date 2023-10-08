import { Request, Response } from 'express';
import { SignUpEntity, SignInEntity } from './auth.entity';
import { authService } from './auth.service';

export const authController = {
  async signUp(req: Request, res: Response) {
    const input = SignUpEntity.parse(req.body);

    await authService.processNewAccountData(input);

    return res.status(201).json({ message: 'Conta criada com sucesso' });
  },

  async signIn(req: Request, res: Response) {
    const input: iSignInInput = SignInEntity.parse(req.body);

    await authService.validatesAccessData(input);

    return res.status(200).json({ msg: 'OK' });
  },
};
