import { randomUUID } from 'node:crypto';
import jwt from 'jsonwebtoken';
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

export const genAccessToken = (payload: object): string => {
  const token = jwt.sign(payload, SECRET_SESS, {
    expiresIn: '1h',
    subject: 'ACCESS',
  });

  return token;
};

export const genRefreshToken = (payload: object): string => {
  const jwtid = randomUUID();
  const token = jwt.sign(payload, SECRET_SESS, {
    expiresIn: '3h',
    jwtid: jwtid,
    subject: 'REFRESH',
  });

  return token;
};
