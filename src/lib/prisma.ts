import { PrismaClient } from '@prisma/client';
import { BaseException } from '../globals/exceptions';

export const prismaService = new PrismaClient();

(async () => {
  await prismaService.$queryRaw`SELECT 1`
    .then(() => {
      console.info('Base de dados conectada!');
    })
    .catch((error) => {
      throw new BaseException({
        code: 500,
        error: 'Prisma Client Initialization Error',
        message: error.message,
      });
    });
})();
