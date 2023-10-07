import { NextFunction, Request, Response } from 'express';
import { IS_PRODUCTION_ENV } from '../globals/constants';
import { BadRequestException, BaseException } from '../globals/exceptions';
import { ZodError } from 'zod';

export const handleErrors = (
  error: BaseException | ZodError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof BaseException) {
    return res.status(error.code).json({
      code: error.code,
      error: error.error,
      message: error.message,
      details: error.details,
    });
  }

  if (error instanceof ZodError) {
    const badRequest = new BadRequestException();

    return res.status(badRequest.code).json({
      code: badRequest.code,
      error: badRequest.error,
      message: badRequest.message,
      details: error.flatten(),
    });
  }

  if (!IS_PRODUCTION_ENV) {
    console.info('------------------------------------------');
    console.info('Erro não controlado\n');
    console.info(error);
    console.info('------------------------------------------');
  }

  return next(res.sendStatus(500));
};
