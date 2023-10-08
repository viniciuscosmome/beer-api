import { prismaService } from '../../lib/prisma';
import { handleErrors } from '../../globals/errors';

export const authRepository = {
  async savesNewAccountData(input: iSignUpInput) {
    await prismaService.credentials
      .create({
        data: {
          email: input.email,
          password: input.password,
          profile: {
            create: {
              firstName: input.firstName,
              lastName: input.lastName,
              birthdate: input.birthdate,
            },
          },
        },
      })
      .catch((error) => handleErrors(error));
  },

  async findAccountByEmail(email: string): Promise<iFindAccountByEmailOutput> {
    const account = await prismaService.credentials
      .findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          password: true,
          profile: {
            select: {
              firstName: true,
            },
          },
        },
      })
      .then((response) => response)
      .catch((error) => handleErrors(error));

    return account as iFindAccountByEmailOutput;
  },
};
