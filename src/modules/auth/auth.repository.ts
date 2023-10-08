import { prismaService } from '../../lib/prisma';
import { handleErrors } from '../../globals/errors';

export const authRepository = {
  async savesNewAccountData(input: iSignUpInput) {
    await prismaService.credentials
      .create({
        data: {
          email: input.email,
          password: input.password,
          profiles: {
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
};
