import { UnprocessableEntityException } from './generic.exceptions';

/**
 * Prisma code: `P2002`
 * Unique Constraint Failed
 */
export class P2002Exception extends UnprocessableEntityException {
  constructor(property: string) {
    super(`O ${property} já está cadastrado.`);
  }
}

/**
 * Prisma code: `P2002`
 * One Or More Records That Were Required But Not Found
 */
export class P2025Exception extends UnprocessableEntityException {
  constructor() {
    super('O campo não pode ser acessado, tente novamente.');
  }
}
