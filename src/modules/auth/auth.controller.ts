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

    const info = await authService.validatesAccessData(input);
    const session = await authService.createTokens(info);

    return res.status(200).json({ message: 'Acesso permitido', ...session });
  },

  async refresh(req: Request, res: Response) {
    const verifiedCredentials = req.verifiedCredentials as iVerifiedCredentials;

    const info = await authService.updateAccessTokenPayload(
      verifiedCredentials.id,
    );
    const session = await authService.createTokens(info);

    return res
      .status(200)
      .json({ message: 'Dados da sessão atualizados', ...session });
  },
};
