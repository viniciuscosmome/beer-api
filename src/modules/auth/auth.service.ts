import { compare, hash } from 'bcryptjs';
import { UnauthorizedException } from '../../globals/exceptions';
import { authRepository } from './auth.repository';
import { ClearCredentialEntity } from './auth.entity';

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
};
