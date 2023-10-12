const queryParam = (name: string, datatype: string, description: string) => ({
  in: 'query',
  name: name,
  required: false,
  schema: {
    type: datatype,
  },
  description: description,
});

export const beersPaths = {
  '/beers': {
    get: {
      tags: ['Beers'],
      summary: 'Busca cerveja usando filtros. Retorna no máximo 50 por página.',
      security: [
        {
          BearerAccess: [],
        },
      ],
      parameters: [
        queryParam('page', 'number', '> Definir a págia de busca.'),
        queryParam(
          'per_page',
          'number',
          '> Quantidade de itens por página. `Máximo 80`.',
        ),
        queryParam(
          'abv_gt',
          'number',
          '> Retorna todas as cervejas com o ABV maior do que o fornecido.',
        ),
        queryParam(
          'abv_lt',
          'number',
          '> Retorna todas as cervejas com o ABV menor do que o fornecido',
        ),
        queryParam(
          'ibu_gt',
          'number',
          '> Retorna todas as cervejas com o IBU maior do que o fornecido',
        ),
        queryParam(
          'ibu_lt',
          'number',
          '> Retorna todas as cervejas com o IBU menor do que o fornecido',
        ),
        queryParam(
          'ebc_gt',
          'number',
          '> Retorna todas as cervejas com o EBC maior do que o fornecido',
        ),
        queryParam(
          'ebc_lt',
          'number',
          '> Retorna todas as cervejas com o EBC menor do que o fornecido',
        ),
        queryParam(
          'beer_name',
          'string',
          '> Retorna todas as cervejas que correspondem ao nome fornecido, isso inclui strings parciais. Use sublinhado (_) ao invés de espaço em branco.',
        ),
        queryParam(
          'yeast',
          'string',
          '> Retorna todas as cervejas que correspondem ao nome de levedura fornecido. Use sublinhado (_) ao invés de espaço em branco.',
        ),
        queryParam(
          'brewed_before',
          'string',
          '> Retorna todas as cervejas que tenham a data de fabricação anteriores a fornecida. Use o formato `mm-yyyy`. Ex: 10-2010',
        ),
        queryParam(
          'brewed_after',
          'string',
          '> Retorna todas as cervejas que tenham a data de fabricação posteriores a fornecida. Use o formato `mm-yyyy`. Ex: 10-2010',
        ),
        queryParam(
          'hops',
          'string',
          '> Retorna todas as cervejas que correspondem ao nome de lúpulo fornecido. Use sublinhado (_) ao invés de espaço em branco.',
        ),
        queryParam(
          'malt',
          'string',
          '> Retorna todas as cervejas que correspondem ao nome de malte fornecido. Use sublinhado (_) ao invés de espaço em branco.',
        ),
        queryParam(
          'food',
          'string',
          '> Retorna todas as cervejas que combinem com o nome de comida fornecido. Use sublinhado (_) ao invés de espaço em branco.',
        ),
        queryParam(
          'ids',
          'string',
          '> Retorna todas as cervejas que contenham um id presente na lista fornecida. Use IDs separador pela barra vetical ( `|` ). Ex: 3|21|35.',
        ),
      ],
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/beers:output',
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
                $ref: '#/components/schemas/beers:output',
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
  'beers:output': {
    type: 'object',
    properties: {
      length: {
        type: 'number',
      },
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
        properties: {
          value: {
            type: 'number',
          },
          unit: {
            type: 'string',
          },
        },
      },
      boil_volume: {
        type: 'object',
        properties: {
          value: {
            type: 'number',
          },
          unit: {
            type: 'string',
          },
        },
      },
      method: {
        type: 'object',
        properties: {
          mash_temp: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                temp: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'number',
                    },
                    unit: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          fermentation: {
            type: 'object',
            properties: {
              temp: {
                type: 'object',
                properties: {
                  value: {
                    type: 'number',
                  },
                  unit: {
                    type: 'string',
                  },
                },
              },
            },
          },
          twist: {
            type: 'boolean',
          },
        },
      },
      ingredients: {
        type: 'object',
        properties: {
          malt: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                amount: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'number',
                    },
                    unit: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          hops: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                amount: {
                  type: 'object',
                  properties: {
                    value: {
                      type: 'number',
                    },
                    unit: {
                      type: 'string',
                    },
                  },
                },
                add: {
                  type: 'string',
                },
                attribute: {
                  type: 'string',
                },
              },
            },
          },
          yeast: {
            type: 'string',
          },
        },
      },
      food_pairing: {
        type: 'array',
        items: {
          type: 'string',
        },
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
