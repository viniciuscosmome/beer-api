import { Prisma } from '@prisma/client';
import { IS_PRODUCTION_ENV } from './constants';
import {
  InternalServerErrorException,
  UniqueConstraintFailedException,
} from './exceptions';
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from 'jsonwebtoken';
import {
  InvalidTokenException,
  TokenExpiredException,
  TokenIsNotActivatedException,
} from './exceptions';

const handlePrismaErrors = (error: Prisma.PrismaClientKnownRequestError) => {
  const target = (error.meta?.target as Array<string>) || ['unknow_meta'];

  switch (error.code) {
    case 'P2002':
      throw new UniqueConstraintFailedException(target[0]);
  }
};

const handleJWTErrors = (error: JsonWebTokenError) => {
  if (error instanceof TokenExpiredError) {
    throw new TokenExpiredException();
  }

  if (error instanceof NotBeforeError) {
    throw new TokenIsNotActivatedException();
  }

  throw new InvalidTokenException();
};

export const handleErrors = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    handlePrismaErrors(error);
  }

  if (error instanceof JsonWebTokenError) {
    handleJWTErrors(error);
  }

  if (!IS_PRODUCTION_ENV) {
    console.info('unknownError', error);
  }

  throw new InternalServerErrorException();
};
