import { randomUUID } from 'crypto';

export const tokenPayload: iAccountInfo = {
  id: randomUUID(),
  roleLevel: 'USER',
};
