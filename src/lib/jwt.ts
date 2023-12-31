import { randomUUID } from 'node:crypto';
import jwt, { SignOptions } from 'jsonwebtoken';
import { SECRET_SESS } from '../globals/constants';
import { handleErrors } from '../globals/errors';

export const checkToken = <Excpected = object>(
  token: string,
  subject: iTokensSubject,
): Excpected => {
  const callback = (error: unknown, decoded: unknown) => {
    if (error) {
      handleErrors(error);
    }

    return decoded;
  };

  const result = jwt.verify(
    token,
    SECRET_SESS,
    {
      subject,
    },
    callback,
  ) as Excpected;

  return result;
};

export const genJwtToken = (
  payload: object,
  subject: iTokensSubject,
): string => {
  const signOptions: SignOptions = {
    subject: subject,
  };

  if (subject === 'ACCESS') {
    signOptions.expiresIn = '1h';
  }

  if (subject === 'REFRESH') {
    const jwtid = randomUUID();

    signOptions.notBefore = '50m';
    signOptions.expiresIn = '2h';
    signOptions.jwtid = jwtid;
  }

  if (subject === 'FORGOT_PASSWORD') {
    signOptions.notBefore = '7s';
    signOptions.expiresIn = '5m';
  }

  const token = jwt.sign(payload, SECRET_SESS, signOptions);
  return token;
};
