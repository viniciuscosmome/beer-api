import { Request, Response } from 'express';
import { SignInEntity } from './auth.entity';
import { authService } from './auth.service';

export const authController = {
  async signIn(req: Request, res: Response) {
    const input: iSignInInput = SignInEntity.parse(req.body);

    const user = await authService.validatesAccessData(input);

    return res.status(200).json({
      message: 'Conectado!',
      token: 'A123456789B',
      refreshToken: 'C987654321D',
      user: user,
    });
  },
};
