import { Request, Response } from 'express';
import {
  SignUpEntity,
  SignInEntity,
  ForgotPasswordEntity,
} from './auth.entity';
import { authService } from './auth.service';

export const authController = {
  async signUp(req: Request, res: Response) {
    const input = SignUpEntity.parse(req.body);

    await authService.processNewAccountData(input);

    return res.status(201).json({ message: 'Conta criada com sucesso' });
  },

  async signIn(req: Request, res: Response) {
    const input: iSignInInput = SignInEntity.parse(req.body);

    const info = await authService.validatesAccessData(input);
    const session = await authService.createSessionTokens(info);

    return res.status(200).json({ message: 'Acesso permitido', ...session });
  },

  async refresh(req: Request, res: Response) {
    const { id } = req.verifiedCredentials as iJwtProps;

    const info = await authService.updateAccessTokenPayload(id);
    const session = await authService.createSessionTokens(info);

    return res
      .status(200)
      .json({ message: 'Dados da sessão atualizados', ...session });
  },

  async forgotPassword(req: Request, res: Response) {
    const { email } = ForgotPasswordEntity.parse(req.body);
    const encodedToken = await authService.forgotPassword(email);

    if (encodedToken) {
      console.log('Send mail to:', email);
      console.log('encodedToken:', encodedToken);
    }

    res.status(200).json({
      message:
        'Nós te enviaremos um e-mail com um link para a definição de uma nova senha.',
    });
  },
};
