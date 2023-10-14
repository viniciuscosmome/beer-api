# Beer API

![version](https://img.shields.io/github/package-json/v/viniciuscosmome/beer-api?labelColor=blue&color=blue)
![license](https://img.shields.io/github/license/viniciuscosmome/beer-api?labelColor=blue&color=blue)
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

A Beer API é uma API que permite buscar cervejas na [Punk API](https://punkapi.com/), uma API pública. Para usar a Beer API, é necessário se cadastrar e informar alguns dados de acesso, como nome, sobrenome, e-mail, senha e data de nascimento.

A Beer API oferece duas opções de busca: básica e detalhada. A busca básica permite buscar uma única cerveja aleatória ou pelo ID. A busca detalhada permite buscar uma ou mais cervejas por diversos critérios, como data de fabricação, ABV, IBU e EBC.

**_Funcionalidades_**

- [x] Criar conta
- [x] Acessar conta
  * Atualiza a sessão
- [x] Recuperar conta
  * Pedir redefinição
  * Definir nova senha
- [x] Controle de acesso as rotas protegidas
- [x] Busca por cervejas aleatórias
- [x] Busca por cervejas pelo ID
- [x] Busca por cervejas confiltros avançados
  * Páginação
  * Itens por página
  * ABV (maior que, menor que)
  * IBU (maior que, menor que)
  * EBC (maior que, menor que)
  * Nome da cerveja
  * Levedura (yeast)
  * Fábricação (anteriror à, posterior à)
  * Amargor (hops)
  * Malte (malt)
  * Comidas que combinam (food)
  * IDs

---

### Sumário: Caminhos

1. [Autenticação](#autenticação)
1. [Recuperar acesso](#recuperar-acesso)
1. [Buscar cervejas](#buscar-cervejas)

### Sumário: Instalação e execução

1. [Requisitos](#requisitos)
1. [Fork e Clone](#fork-e-clone)
1. [Configuração do ambiente](#configuração-do-ambiente)
1. [Baixando as dependências](#baixando-as-dependências)
1. [Migrações da base de dados](#migrações-da-base-de-dados)
1. [Executando a API em desenvolvimento](#executado-a-api-em-desenvolvimento)
1. [Executando a API em produção](#executando-a-api-em-produção)
1. [Outros comandos](#outros-comandos)

# Caminhos

## Autenticação

| Caminho       | Método | Descrição                 |
| ------------- | ------ | ------------------------- |
| /auth/sign-up | `POST` | Cria conta                |
| /auth/sign-in | `POST` | Acessa conta              |
| /auth/refresh | `POST` | Atualiza chaves de sessão |

## Recuperar acesso

| Caminho               | Método | Descrição                           |
| --------------------- | ------ | ----------------------------------- |
| /auth/forgot-password | `POST` | Pedir chave para definir nova senha |
| /auth/set-password    | `PUT`  | Definir nova senha                  |

## Buscar cervejas

| Caminho         | Método | Descrição                                  |
| --------------- | ------ | ------------------------------------------ |
| /beers          | `GET`  | Usar filtros mais avançados                |
| /beers/{filter} | `GET`  | Usa filtro simples para buscar uma cerveja |

> [!note]\
> Você pode encontrar mais detalhes sobre as rotas e seus parêmetros ao executar a **_Beer API_**

# Instalação e execução

## Requisitos

- Node.js v18.17.1\
  Esta versão do node ou uma mais recente.
- Mailtrap\
  Um serviço que permita testar o envio de e-mails SMTP.

## Fork e Clone

Faça um fork deste repositório e depois um clone desse fork em uma pasta no seu computador.

**_Comando para clonar um repositório_**

```bash
# git clone <url-do-fork-do-repositorio>
git clone https://github.com/viniciuscosmome/beer-api.git
```

## Configuração do ambiente

Antes de executar a API você deve realizar algumas configurações

1. **Variáveis de ambiente:**\
   Crie um arquivo na raiz do repositório chamado `.env`. Além da tabela abaixo, você encontrará um arquivo já criado chamado `example.env`, está na raiz do projeto e pode ser usado como base.

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

## Baixando as dependências

Use o comando abaixo para instalar todas as dependências do projeto

```bash
yarn install
```

## Migrações da base de dados

Use o seguinte comado para executar as migrações da base de dados

```bash
yarn prisma:mig:dev
# ou
npx prisma migrate dev
```

Execute a seed da base de dados para criar campos necessários para a aplicação

```bash
yarn prisma:seed
# ou
npx prisma db seed
```

## Executado a API em desenvolvimento

O comando abaixo inicia o servidor no ambiente de desenvolvimento

```bash
yarn start
```

O comando abaixo inicia o servidor no ambiente de desenvolvimento, ele reinicia assim que detecta uma mudança em algum arquivo

```bash
yarn start:dev
```

## Executando a API em produção

Compilando para o uso em produção

```bash
yarn build
```

Executando migrações para o uso em produção

```bash
yarn prisma:mig:prod
# ou
npx prisma migrate deploy
```

Executando em produção

```bash
yarn start:prod
```

> [!note]\
> Lembre-se de cofigurar as variáveis de ambiente para usar em produção.

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
          <img width="125" src="https://avatars.githubusercontent.com/u/48590313?v=4">
        </a>
      </td>
    </tr>
    <tr>
      <td align=center>
        <a href="https://github.com/viniciuscosmome">
          <strong>Cosmo</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>
