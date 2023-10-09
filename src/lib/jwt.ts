import { randomUUID } from 'node:crypto';
import jwt from 'jsonwebtoken';
import { SECRET_SESS } from '../globals/constants';

export const genAccessToken = (payload: object): string => {
  const token = jwt.sign(payload, SECRET_SESS, {
    expiresIn: '1h',
    subject: 'access',
  });

  return token;
};

export const genRefreshToken = (payload: object): string => {
  const jwtid = randomUUID();
  const token = jwt.sign(payload, SECRET_SESS, {
    expiresIn: '3h',
    jwtid: jwtid,
    subject: 'refresh',
  });

  return token;
};
