import { prismaService } from '../../lib/prisma';
import { handleErrors } from '../../globals/errors';

export const authRepository = {
  async savesNewAccountData(input: iSignUpInput, level: iRoleLevels) {
    await prismaService.credentials
      .create({
        data: {
          email: input.email,
          password: input.password,
          role: {
            connect: {
              level,
            },
          },
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

  async findCredentialByEmail(email: string): Promise<iFindCredential> {
    const credential = await prismaService.credentials
      .findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          password: true,
          role: {
            select: {
              level: true,
            },
          },
        },
      })
      .then((response) => {
        if (response) {
          return {
            id: response.id,
            password: response.password,
            roleLevel: response.role.level,
          };
        }
      })
      .catch((error) => handleErrors(error));

    return credential as iFindCredential;
  },

  async findCredentialById(id: string): Promise<iAccountInfo> {
    const credential = await prismaService.credentials
      .findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          role: {
            select: {
              level: true,
            },
          },
        },
      })
      .then((response) => {
        if (response) {
          return {
            id: response.id,
            roleLevel: response.role.level,
          };
        }
      })
      .catch((error) => handleErrors(error));

    return credential as iAccountInfo;
  },
};
