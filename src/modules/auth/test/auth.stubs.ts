import { randomUUID } from 'node:crypto';

export const tokenPayload: iAccountInfo = {
  id: randomUUID(),
  roleLevel: 'USER',
};
