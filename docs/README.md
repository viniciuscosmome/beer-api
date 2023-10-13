# Beer API

![version](https://img.shields.io/github/package-json/v/viniciuscosmome/beer-api?labelColor=blue&color=blue)
![license](https://img.shields.io/github/license/viniciuscosmome/beer-api?labelColor=blue&color=blue)

Ferramentas usadas

![Tool](https://img.shields.io/badge/-Express-white?logo=Express&logoColor=black)
![Tool](https://img.shields.io/badge/-Axios-white?logo=axios&logoColor=black)
![Tool](https://img.shields.io/badge/-Zod-white?logo=zod&logoColor=black)
![Database](https://img.shields.io/badge/-SQLite-white?logo=sqlite&logoColor=black)
![Database](https://img.shields.io/badge/-Prisma-white?logo=prisma&logoColor=black)
![aux](https://img.shields.io/badge/-TypeScript-white?logo=typescript&logoColor=black)
![Aux](https://img.shields.io/badge/-Vitest-white?logo=vitest&logoColor=black)
![Aux](https://img.shields.io/badge/-Swagger-white?logo=swagger&logoColor=black)
![Aux](https://img.shields.io/badge/-Eslint-white?logo=eslint&logoColor=black)
![Aux](https://img.shields.io/badge/-Prettier-white?logo=prettier&logoColor=black)
![Aux](https://img.shields.io/badge/-Git-white?logo=git&logoColor=black)
![Aux](https://img.shields.io/badge/-Node-white?logo=Node.js&logoColor=black)

---

### Sumário

1. [Requisitos](#requisitos)
1. [Fork e Clone](#fork-e-clone)
1. [Configuração do ambiente](#configuração-do-ambiente)
1. [Instalando as dependências](#instalando-as-dependências)
1. [Executando a API em desenvolvimento](#executado-a-api-em-desenvolvimento)
1. [Executando a API em produção](#executanndo-a-api-em-produção)
1. [Outros comandos](#outros-comandos)

## Requisitos

- Node.js v18.x\
  Esta versão ou uma mais recente
- Mailtrap\
  Ou outro serviço que permita testar o envio de e-mails SMTP

## Fork e Clone

Faça um fork deste repositório e depois o clone em uma pasta de sua escolha, no seu computador (repositório local).

**_Comando para clonar um repositório_**

```bash
# git clone <url-do-fork-do-repositorio>
git clone https://github.com/viniciuscosmome/beer-api.git
```

## Configuração do ambiente

Antes de executar a API você deve realizar algumas configurações

1. **Variáveis de ambiente:**\
   Crie um arquivo na raiz do repositório chamado `.env`. Além da tabela abaixo, você encontrará um arquivo já criado chamado `example.env`, na raiz do projeto, pode usá-lo de base.

| Variável      | Tipo     | Descrição                                          |
| ------------- | -------- | -------------------------------------------------- |
| PORT          | `number` | Porta em que o servidor será acessado              |
| NODE_ENV      | `string` | Ambiente em que a aplicação está sendo executada   |
| PASSWORD_SALT | `number` | Salta que será usado no hash da senha              |
| SECRET_SESS   | `string` | Segredo que será usado para gerar os token         |
| MAIL_FROM     | `string` | E-mail que identifica a aplicação                  |
| MAIL_HOST     | `string` | Host disponibilizado pelo seu serviço de e-mail    |
| MAIL_PORT     | `number` | Porta disponibilizado pelo seu serviço de e-mail   |
| MAIL_USER     | `string` | Usuário disponibilizado pelo seu serviço de e-mail |
| MAIL_PASS     | `string` | Senha disponibilizado pelo seu serviço de e-mail   |

## Instalando as dependências

Use o comando abaixo para instalar todas as dependências do projeto

```bash
yarn install
```

## Migrações da base de dados

Use o seguinte comado para executar as migrações da base de dados.

```bash
yarn prisma:setup
```

Execute a seed da base de dados para criar campos necessários para a aplicação.

```bash
yarn prism:seed
```

## Executado a API em desenvolvimento

O comando abaixa inicia o servidor no ambiente de desenvolimento

```bash
yarn start
```

O comando abaixa inicia o servidor no ambiente de desenvolimento no modo observador, ele reinicia assim que detecta uma mudança em algum arquivo.

```bash
yarn start:dev
```

## Executanndo a API em produção

Gerando o build de produção

```bash
yarn build
```

Gerando o build de produção

```bash
yarn start:prod
```

> Lembre-se de cofigurar as variáveis de ambiete para usar em produção.

## Outros comandos

Executando testes

```bash
yarn test
```

Executado a verificação de padronização do código.

```bash
yarn lint
```

Fixando erros de padronização do código.

```bash
yarn lint:fix
yarn format
```

---

### Autor

<table>
  <tbody>
    <tr>
      <td align=center>
        <a href="https://github.com/viniciuscosmome">
          <img
            width="125"
            src="https://avatars.githubusercontent.com/u/48590313?v=4"
            style="max-width:100%;border-radius:50%;border:3px solid rgb(15, 110, 232);">
        </a>
      </td>
    </tr>
    <tr>
      <td align=center>
        <a
          href="https://github.com/viniciuscosmome"
          style="color: rgb(15, 110, 232);">
          <strong>Cosmo</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>
