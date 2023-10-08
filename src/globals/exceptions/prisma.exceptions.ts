import { UnprocessableEntityException } from './generic.exceptions';

/**
 * Prisma code: `P2002`
 */
export class UniqueConstraintFailedException extends UnprocessableEntityException {
  constructor(property: string) {
    super(`O ${property} já está cadastrado.`);
  }
}
