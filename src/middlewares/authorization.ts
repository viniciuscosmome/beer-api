import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { InvalidTokenException } from '../globals/exceptions/jwt.exceptions';
import { checkToken } from '../lib/jwt';

const getAutorizationFromHeaders = z.object({
  authorization: z.string().transform((data) => data.split(' ')),
});

export const authorization = (subject: iTokensSubject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const [bearer, token] = getAutorizationFromHeaders.parse(
      req.headers,
    ).authorization;

    if (!bearer || bearer !== 'Bearer' || !token) {
      throw new InvalidTokenException();
    }

    const response = checkToken<iAccessTokenCheckerOutput>(token, subject);

    req.verifiedCredentials = {
      id: response.id,
      roleLevel: response.roleLevel,
      jwtid: response.jti,
    };

    return next();
  };
};
