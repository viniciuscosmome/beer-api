import { UnauthorizedException } from './generic.exceptions';

export class TokenExpiredException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'Token de autorização expirado.');
  }
}

export class InvalidTokenException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'Token de autorização inválido.');
  }
}

export class TokenIsNotActivatedException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'O token de autorização não está ativo.');
  }
}
