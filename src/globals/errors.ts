import { Prisma } from '@prisma/client';
import { IS_PRODUCTION_ENV } from './constants';
import {
  InternalServerErrorException,
  UniqueConstraintFailedException,
} from './exceptions';

function handlePrismaErrors(error: Prisma.PrismaClientKnownRequestError) {
  const target = (error.meta?.target as Array<string>) || ['unknow_meta'];

  switch (error.code) {
    case 'P2002':
      throw new UniqueConstraintFailedException(target[0]);
  }
}

export function handleErrors(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    handlePrismaErrors(error);
  }

  if (!IS_PRODUCTION_ENV) {
    console.info('unknownError', error);
  }

  throw new InternalServerErrorException();
}
