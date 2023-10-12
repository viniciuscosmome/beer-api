/*
 * Swagger docs
 * https://swagger.io/specification/v3/
 */
import { SwaggerUiOptions } from 'swagger-ui-express';
import {
  APP_LICENSE,
  APP_LICENSE_URL,
  APP_TITLE,
} from '../../globals/constants';
import { exceptionsSchemas } from './exceptions.docs';
import { authPaths, authSchemas } from './auth.docs';
import { beersPaths, beersSchemas } from './beers.docs';

export const swaggerOptions: SwaggerUiOptions = {
  customSiteTitle: APP_TITLE,
};

export const docs = {
  openapi: '3.0.0',
  info: {
    title: APP_TITLE,
    license: {
      name: APP_LICENSE,
      url: APP_LICENSE_URL,
    },
  },
  paths: {
    ...authPaths,
    ...beersPaths,
  },
  components: {
    schemas: {
      ...authSchemas,
      ...beersSchemas,
      ...exceptionsSchemas,
    },
    securitySchemes: {
      BearerAccess: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'authorization',
        in: 'header',
        description:
          'Use o `accessToken`, ele é obtido ao realizar o `sign-in`.',
      },
      BearerRefresh: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'authorization',
        in: 'header',
        description:
          'Use o `refreshToken`, ele é obtido ao realizar o `sign-in`.',
      },
      BearerSetPassword: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'authorization',
        in: 'header',
        description:
          'Use o `recoveryToken`, ele é obtido no link enviado para o e-mail.',
      },
    },
  },
};
