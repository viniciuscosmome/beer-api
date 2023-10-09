import { UnauthorizedException } from './generic.exceptions';

export class TokenExpiredException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'Token de sessão expirado.');
  }
}

export class InvalidTokenException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'Token de sessão inválido.');
  }
}

export class TokenIsNotActivatedException extends UnauthorizedException {
  constructor(message?: string) {
    super(message || 'O token informado ainda não está ativo.');
  }
}
