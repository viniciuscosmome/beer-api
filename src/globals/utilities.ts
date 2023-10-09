import { randomUUID } from 'node:crypto';
import jwt from 'jsonwebtoken';
import { SECRET_SESS } from './constants';

export const ageLimit = (age: number) => {
  return new Date(new Date().getFullYear() - age, 11, 31);
};

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
