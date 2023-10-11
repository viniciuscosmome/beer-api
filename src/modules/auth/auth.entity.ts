import { PASSWORD_REGEX } from '../../globals/constants';
import { ageLimit } from '../../globals/utilities';
import { z } from 'zod';

export const SignUpEntity = z
  .object({
    email: z.string().email(),
    password: z.string().regex(PASSWORD_REGEX),
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.coerce.date().max(ageLimit(18)),
  })
  .required();

export const SignInEntity = SignUpEntity.pick({
  email: true,
  password: true,
}).required();

export const ForgotPasswordEntity = SignUpEntity.pick({
  email: true,
}).required();

export const SetPasswordEntity = SignUpEntity.pick({
  password: true,
}).required();
