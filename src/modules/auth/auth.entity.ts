import { PASSWORD_REGEX } from '../../globals/constants';
import { z } from 'zod';

export const SignInEntity = z
  .object({
    email: z.string().email(),
    password: z.string().regex(PASSWORD_REGEX),
    remember: z.boolean(),
  })
  .required();
