export class BaseException extends Error {
  code: number;
  error: string;
  message: string;
  details?: object;

  constructor({ code, error, message, details }: iBaseException) {
    super(message);
    this.code = code;
    this.error = error;
    this.message = message;
    if (details) {
      this.details = details;
    }
  }
}

export class BadRequestException extends BaseException {
  constructor(message?: string) {
    super({
      code: 400,
      error: 'Bad Request',
      message: message || 'Uma ou mais propriedades passadas são inválidas.',
    });
  }
}

export class UnauthorizedException extends BaseException {
  constructor(message?: string) {
    super({
      code: 401,
      error: 'Unauthorized',
      message: message || 'Credenciais inválidas.',
    });
  }
}

export class ForbiddenException extends BaseException {
  constructor(message?: string) {
    super({
      code: 403,
      error: 'Forbidden',
      message: message || 'Você não tem permissão para realizar esta ação.',
    });
  }
}

export class NotFoundException extends BaseException {
  constructor(message?: string) {
    super({
      code: 404,
      error: 'Not Found',
      message: message || 'Recurso não encontrado',
    });
  }
}

export class UnprocessableEntityException extends BaseException {
  constructor(message?: string) {
    super({
      code: 422,
      error: 'Unprocessable Entity',
      message: message || 'Entendemos sua requisição, mas não iremos prosseguir.',
    });
  }
}

export class TooManyRequestsException extends BaseException {
  constructor(message?: string) {
    super({
      code: 429,
      error: 'Too Many Requests',
      message: message || 'Você realizou muitas requisições recentemente.',
    });
  }
}

export class InternalServerErrorException extends BaseException {
  constructor(message?: string) {
    super({
      code: 500,
      error: 'Internal Server Error',
      message: message || 'Erro interno não controlado.',
    });
  }
}
