import { compare, hash } from 'bcryptjs';
import { UnauthorizedException } from '../../globals/exceptions';
import { authRepository } from './auth.repository';
import { genJwtToken } from '../../lib/jwt';

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

  async validatesAccessData(input: iSignInInput): Promise<iAccountInfo> {
    const { email, password } = input;

    const credential = await authRepository.findCredentialByEmail(email);
    if (!credential) {
      throw new UnauthorizedException();
    }

    const isValidPassword = await compare(password, credential.password);
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    return {
      id: credential.id,
      roleLevel: credential.roleLevel,
    };
  },

  async updateAccessTokenPayload(id: string): Promise<iAccountInfo> {
    const payload = await authRepository.findCredentialById(id);

    if (!payload) {
      throw new UnauthorizedException();
    }

    return payload;
  },

  async createTokens(input: iAccountInfo): Promise<iSessionProps> {
    const accessToken = genJwtToken(input);
    const refreshToken = genJwtToken(input, true);

    return {
      accessToken,
      refreshToken,
    };
  },
};
