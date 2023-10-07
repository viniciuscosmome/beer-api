import { UnauthorizedException } from '../../globals/exceptions';

export const authService = {
  async validatesAccessData(input: iSignInInput): Promise<iValidatesAccessDataOutput> {
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
