/*
 * Swagger docs
 * https://swagger.io/specification/v3/
 */
import { SwaggerUiOptions } from 'swagger-ui-express';
import { APP_LICENSE, APP_LICENSE_URL, APP_TITLE } from '../../globals/constants';
import { exceptionsSchemas } from './exceptions.docs';
import { authPaths, authSchemas } from './auth.docs';

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
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        description: 'O `token` é obtido ao realizar o `sign-in`.',
      },
    },
    schemas: {
      ...authSchemas,
      ...exceptionsSchemas,
    },
  },
};
