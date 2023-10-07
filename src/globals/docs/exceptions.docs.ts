import {
  BadRequestException,
  BaseException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  TooManyRequestsException,
  UnauthorizedException,
  UnprocessableEntityException,
} from '../../globals/exceptions';

const baseSchema = (error: BaseException) => {
  return {
    type: 'object',
    properties: {
      code: {
        type: 'number',
        example: error.code,
      },
      error: {
        type: 'string',
        example: error.error,
      },
      message: {
        type: 'string',
        example: error.message,
      },
      details: {
        type: 'object',
        nullable: true,
      },
    },
  };
};

export const exceptionsSchemas = {
  $400: baseSchema(new BadRequestException()),
  $401: baseSchema(new UnauthorizedException()),
  $403: baseSchema(new ForbiddenException()),
  $404: baseSchema(new NotFoundException()),
  $422: baseSchema(new UnprocessableEntityException()),
  $429: baseSchema(new TooManyRequestsException()),
  $500: baseSchema(new InternalServerErrorException()),
};
