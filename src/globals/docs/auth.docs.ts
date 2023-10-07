export const authPaths = {
  '/auth/sign-in': {
    post: {
      tags: ['Authentication'],
      description: 'Parmito o acesso a conta.',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/AuthSignInInput',
            },
          },
        },
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthSignInOutput$200',
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
  AuthSignInInput: {
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
        type: 'boolear',
        example: false,
      },
    },
  },
  AuthSignInOutput$200: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      token: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: '1',
          },
          name: {
            type: 'string',
            example: 'João',
          },
        },
      },
    },
  },
};
