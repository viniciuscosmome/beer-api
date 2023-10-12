import { Prisma } from '@prisma/client';
import { IS_PRODUCTION_ENV } from './constants';
import {
  InternalServerErrorException,
  P2002Exception,
  P2025Exception,
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
import { AxiosError } from 'axios';

const handlePrismaErrors = (error: Prisma.PrismaClientKnownRequestError) => {
  const target = (error.meta?.target as Array<string>) || ['unknow_meta'];

  switch (error.code) {
    case 'P2002':
      throw new P2002Exception(target[0]);
    case 'P2025':
      throw new P2025Exception();
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

const handleAxiosErrors = (error: unknown) => {
  // ! Adicionar um logger para registrar os erros do axios
  console.info('------------------------------------------');
  console.info('Send to logger: [AxiosError]\n');
  console.info(error);
  console.info('------------------------------------------');
  return;
};

export const handleErrors = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    handlePrismaErrors(error);
  }

  if (error instanceof JsonWebTokenError) {
    handleJWTErrors(error);
  }

  if (error instanceof AxiosError) {
    return handleAxiosErrors(error);
  }

  if (!IS_PRODUCTION_ENV) {
    console.info('unknownError', error);
  }

  throw new InternalServerErrorException();
};
