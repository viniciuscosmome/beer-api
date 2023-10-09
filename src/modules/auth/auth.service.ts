import { compare, hash } from 'bcryptjs';
import { UnauthorizedException } from '../../globals/exceptions';
import { authRepository } from './auth.repository';
import { ClearCredentialEntity } from './auth.entity';
import { genAccessToken, genRefreshToken } from '../../globals/utilities';

export const authService = {
  async processNewAccountData(input: iSignUpInput): Promise<void> {
    const { password } = input;

    const hashedPassword = await hash(password, 10);

    await authRepository.savesNewAccountData(
      {
        ...input,
        password: hashedPassword,
      },
      'USER',
    );

    return;
  },

  async validatesAccessData(input: iSignInInput): Promise<iCleanCledentials> {
    const { email, password } = input;

    const credential = await authRepository.findCredentialByEmail(email);
    if (!credential) {
      throw new UnauthorizedException();
    }

    const isValidPassword = await compare(password, credential.password);
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    const info = ClearCredentialEntity.parse(credential);
    return info;
  },

  async createTokens(input: iCreateTokensInput): Promise<iSessionTokens> {
    const accessToken = genAccessToken(input);
    const refreshToken = genRefreshToken({ id: input.id });

    return {
      accessToken,
      refreshToken,
    };
  },
};
