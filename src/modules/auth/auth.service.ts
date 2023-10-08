import { hash } from 'bcryptjs';
import { UnauthorizedException } from '../../globals/exceptions';
import { authRepository } from './auth.repository';

export const authService = {
  async processNewAccountData(input: iSignUpInput): Promise<void> {
    const { password } = input;

    const hashedPassword = await hash(password, 10);

    await authRepository.savesNewAccountData({
      ...input,
      password: hashedPassword,
    });

    return;
  },

  async validatesAccessData(
    input: iSignInInput,
  ): Promise<iValidatesAccessDataOutput> {
    const { email, password } = input;

    if (email !== 'email@example.com') {
      throw new UnauthorizedException();
    }

    if (password !== 'strongW#3') {
      throw new UnauthorizedException();
    }

    return {
      id: 1,
      name: 'João',
    };
  },
};
