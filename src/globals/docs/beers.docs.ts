export const beersPaths = {
  '/beers/{filter}': {
    get: {
      tags: ['Beers'],
      summary: 'Busca uma cerveja aleatória, ou específica.',
      security: [
        {
          BearerAccess: [],
        },
      ],
      parameters: [
        {
          in: 'path',
          name: 'filter',
          required: true,
          schema: {
            type: 'string',
          },
          description:
            '> Para cerveja aleatória use `random`. Para cerveja específica use um `ID`. Opções de ids [1-325].',
        },
      ],
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/beers:filter:output',
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

export const beersSchemas = {
  'beers:filter:output': {
    type: 'object',
    properties: {
      beers: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/PunkAPI:beer',
        },
      },
    },
  },
  'PunkAPI:beer': {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
      name: {
        type: 'string',
      },
      tagline: {
        type: 'string',
      },
      first_brewed: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      image_url: {
        type: 'string',
      },
      abv: {
        type: 'number',
      },
      ibu: {
        type: 'number',
      },
      target_fg: {
        type: 'number',
      },
      target_og: {
        type: 'number',
      },
      ebc: {
        type: 'number',
      },
      srm: {
        type: 'number',
      },
      ph: {
        type: 'number',
      },
      attenuation_level: {
        type: 'number',
      },
      volume: {
        type: 'object',
      },
      boil_volume: {
        type: 'object',
      },
      method: {
        type: 'object',
      },
      ingredients: {
        type: 'object',
      },
      food_pairing: {
        type: 'array',
        items: {},
      },
      brewers_tips: {
        type: 'string',
      },
      contributed_by: {
        type: 'string',
      },
    },
  },
};
