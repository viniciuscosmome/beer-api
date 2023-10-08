import { prismaService } from '../../lib/prisma';
import { Prisma } from '@prisma/client';
import {
  InternalServerErrorException,
  UnprocessableEntityException,
} from '../../globals/exceptions';

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
      .catch((error) => {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          switch (error.code) {
            case 'P2002':
              throw new UnprocessableEntityException();
          }
        }

        throw new InternalServerErrorException('Ao criar um registro.');
      });
  },
};
