import { PASSWORD_REGEX } from '../../globals/constants';
import { responses } from '../../globals/responses';
import { ageLimit } from '../../globals/utilities';
import { z } from 'zod';

export const SignUpEntity = z.object({
  email: z.string(responses.datatype.string).email(responses.custom.email),
  password: z
    .string(responses.datatype.string)
    .regex(PASSWORD_REGEX, responses.custom.password),
  firstName: z.string(responses.datatype.string),
  lastName: z.string(responses.datatype.string),
  birthdate: z.coerce
    .date(responses.datatype.date)
    .max(ageLimit(18), responses.conditions.minAge(18)),
});

export const SignInEntity = SignUpEntity.pick({
  email: true,
  password: true,
});

export const ForgotPasswordEntity = SignUpEntity.pick({
  email: true,
});

export const SetPasswordEntity = SignUpEntity.pick({
  password: true,
});
