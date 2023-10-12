export const responses = {
  datatype: {
    string: {
      invalid_type_error: 'O tipo de dado esperado é "string".',
      required_error: 'O campo é obrigatório.',
    },
    date: {
      invalid_type_error: 'O formato deve ser "YYYY-DD-MM".',
      required_error: 'O campo é obrigatório.',
    },
    number: {
      invalid_type_error: 'O tipo de dado esperado é "number".',
      required_error: 'O campo é obrigatório.',
    },
    int: {
      message: 'O número esperado deve ser inteiro, sem casas decimais.',
    },
  },
  conditions: {
    min(min: number) {
      return {
        message: `Deve ter um valor mínimo de ${min}.`,
      };
    },
    max(max: number) {
      return {
        message: `Deve ter um valor máximo de ${max}.`,
      };
    },
    minAge(min: number) {
      return {
        message: `A idade mínima permitida é ${min} anos.`,
      };
    },
  },
  custom: {
    email: {
      message: 'O email deve ter um formato válido. Ex: name@example.com',
    },
    password: {
      message:
        'Sua senha deve conter no mínimo uma letra maiúscula, uma letra minúscula, um número e um símbolo.',
    },
    basicSearch: {
      message:
        'Use um ID entre 1 e 325 para buscar uma cerveja específica, ou a palavra "random" para buscar uma cerveja aleatória.',
    },
    textSearch: {
      message:
        'Os caracteres permitidos são letras e, ao invés de espaços em branco, use sublinhado (_).',
    },
    brewedDate: {
      message:
        'O formato da data esperada é "MM-YYYY". Use apenas números inteiros.',
    },
    brewedLimit: {
      message:
        'O mês (mm) deve estar entre 1 e 12. O ano (yyyy) deve estar entre 1 e 2500.',
    },
    idsFormat: {
      message:
        'O formato da lista de IDs esperado é "ID1|ID2|ID3". Separe-os com símbolo "|". Ex: 27|35|56',
    },
    idLimit: {
      message: 'O ID deve estar entre 1 e 325.',
    },
  },
};
