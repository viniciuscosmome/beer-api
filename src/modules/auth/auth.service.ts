import { compare, hash } from 'bcryptjs';
import { UnauthorizedException } from '../../globals/exceptions';
import { authRepository } from './auth.repository';
import { genJwtToken } from '../../lib/jwt';
import { PASSWORD_SALT } from '../../globals/constants';

export const authService = {
  async processNewAccountData(input: iSignUpInput): Promise<void> {
    const { password } = input;

    const hashedPassword = await hash(password, PASSWORD_SALT);

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

  async createSessionTokens(input: iAccountInfo): Promise<iSessionProps> {
    const accessToken = genJwtToken(input, 'ACCESS');
    const refreshToken = genJwtToken(input, 'REFRESH');

    return {
      accessToken,
      refreshToken,
    };
  },

  async forgotPassword(email: string): Promise<string | void> {
    const id = await authRepository.getCredentialIdByEmail(email);

    if (!id) return;

    const token = genJwtToken({ id }, 'FORGOT_PASSWORD');
    return token;
  },

  async processTheNewPassword(input: iUpdatePasswordProps): Promise<void> {
    const { id, password, tokenActivatedAt } = input;

    const hashedPassword = await hash(password, PASSWORD_SALT);
    const activatedAt = new Date((tokenActivatedAt as number) * 1e3);

    await authRepository.updatePassword({
      id,
      password: hashedPassword,
      tokenActivatedAt: activatedAt,
    });

    return;
  },
};
