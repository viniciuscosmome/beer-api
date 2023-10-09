export const authPaths = {
  '/auth/sign-up': {
    post: {
      tags: ['Authentication'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/auth:sign-up:input',
            },
          },
        },
      },
      responses: {
        '201': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/auth:sign-up:output',
              },
            },
          },
        },
        '400': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$400',
              },
            },
          },
        },
        '401': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$401',
              },
            },
          },
        },
        '422': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$422',
              },
            },
          },
        },
        '500': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$500',
              },
            },
          },
        },
      },
    },
  },
  '/auth/sign-in': {
    post: {
      tags: ['Authentication'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/auth:sign-in:input',
            },
          },
        },
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/auth:sign-in:output',
              },
            },
          },
        },
        '400': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$400',
              },
            },
          },
        },
        '401': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$401',
              },
            },
          },
        },
        '422': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$422',
              },
            },
          },
        },
        '500': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$500',
              },
            },
          },
        },
      },
    },
  },
};

export const authSchemas = {
  'auth:sign-up:input': {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'email@example.com',
      },
      password: {
        type: 'string',
        example: 'strongW#3',
      },
      firstName: {
        type: 'string',
        example: 'João',
      },
      lastName: {
        type: 'string',
        example: 'Silva',
      },
      birthdate: {
        type: 'date',
        example: '1990-12-31',
      },
    },
  },
  'auth:sign-up:output': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Conta criada com sucesso!',
      },
    },
  },
  'auth:sign-in:input': {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'email@example.com',
      },
      password: {
        type: 'string',
        example: 'strongW#3',
      },
      remember: {
        type: 'boolean',
        example: false,
      },
    },
  },
  'auth:sign-in:output': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Acesso permitido',
      },
      accessToken: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
    },
  },
};
