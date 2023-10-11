export const authPaths = {
  '/auth/sign-up': {
    post: {
      tags: ['Authentication'],
      summary: 'Cria uma conta se o e-mail ainda não foi usado.',
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
      summary: 'Acessa a conta e retorna as chaves de acesso.',
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
  '/auth/refresh': {
    post: {
      tags: ['Authentication'],
      summary: 'Atualiza as chaves de acesso.',
      security: [
        {
          BearerRefresh: [],
        },
      ],
      requestBody: {},
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/auth:refresh:output',
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
  '/auth/forgot-password': {
    post: {
      tags: ['Recovery access'],
      summary: 'Cria um token para permitir a definição de uma nova senha.',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/auth:forgot-password:input',
            },
          },
        },
      },
      responses: {
        '202': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/auth:forgot-password:output',
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
  '/auth/set-password': {
    put: {
      tags: ['Recovery access'],
      summary: 'Define uma nova senha de acesso.',
      security: [
        {
          BearerSetPassword: [],
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/auth:set-password:input',
            },
          },
        },
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/auth:set-password:output',
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
  'auth:refresh:output': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Dados da sessão atualizados',
      },
      accessToken: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
    },
  },
  'auth:forgot-password:input': {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        example: 'email@example.com',
      },
    },
  },
  'auth:forgot-password:output': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example:
          'Nós te enviaremos um e-mail com um link para a definição de uma nova senha',
      },
    },
  },
  'auth:set-password:input': {
    type: 'object',
    properties: {
      password: {
        type: 'string',
        example: '_strongW#3',
      },
    },
  },
  'auth:set-password:output': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        example: 'Sua senha foi alterada com sucesso!',
      },
    },
  },
};
