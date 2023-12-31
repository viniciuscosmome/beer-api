import { Request, Response } from 'express';
import {
  SignUpEntity,
  SignInEntity,
  ForgotPasswordEntity,
  SetPasswordEntity,
} from './auth.entity';
import { authService } from './auth.service';
import { MailService } from '../../lib/nodemailer';
import { IS_PRODUCTION_ENV } from '../../globals/constants';

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
    const recoveryToken = await authService.forgotPassword(email);
    const message =
      'Nós te enviaremos um e-mail com um link para a definição de uma nova senha.';

    if (recoveryToken) {
      await MailService.recoveryPassword(email, recoveryToken);
    }

    if (!IS_PRODUCTION_ENV) {
      return res.status(202).json({
        message,
        recoveryTokenInTestEnvironment: recoveryToken,
      });
    }

    return res.status(202).json({
      message,
    });
  },

  async setPassword(req: Request, res: Response) {
    const { id, notBefore } = req.verifiedCredentials as iJwtProps;
    const { password } = SetPasswordEntity.parse(req.body);

    await authService.processTheNewPassword({
      id,
      password,
      tokenActivatedAt: notBefore as number,
    });

    return res.status(200).json({
      message: 'Sua senha foi alterada com sucesso!',
    });
  },
};
