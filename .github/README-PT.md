<h2 align="center">
  API Javascript para um trabalho de faculdade
</h2>

[:us: English version](../README.md)

## 💁 Sobre o projeto

Uma API Rest que prover o que é necessário para o professor "gamificar" tarefas de estudantes. Construído com Javascript, essa API usa [Express](https://expressjs.com), [Prisma](https://www.prisma.io) e outras bibliotecas para facilitar na velocidade de desenvolvimento e manutenção do código. Inicialmente, foi escolhido o SQLite como banco de dados principal. Esse repositório é apenas um trabalho de faculdade :)

Para ver o **cliente web em React**, [clique aqui](https://github.com/AlexsandroBezerra/college-web)

## 💻 Introdução

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/AlexsandroBezerra/college-api.git
$ cd college-api
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Faça uma cópia do arquivo '.env.example' para '.env'
# e configure suas variáveis de ambiente
$ cp .env.example .env

# Rode as migrações do banco de dados.
$ yarn prisma migrate dev

# Para finalizar, rode a API
$ yarn dev

# Tudo certo o projeto iniciou
```

## 🤔 Como contribuir?

**Faça um fork desse repositório**

```bash
# Fork usando a ferramenta de linha de comando oficial do Github
# Se você não tem a CLI do github, use o site do repositório para isso

$ gh repo fork AlexsandroBezerra/college-api
```

**Siga os passos abaixo**

```bash
# Clone o seu fork
$ git clone your-fork-url && cd college-api

# Crie uma brach com sua feature
$ git checkout -b my-feature

# Faça um commit com suas mudanças
$ git commit -m 'feat: My new feature'

# Envie o código para sua branch remota
$ git push origin my-feature
```

Após o ser pull request ser adicionado ao projeto, você pode excluir sua branch

## 📝 Licença

Esse projeto está sobre licença GPL-3.0 License - veja no [arquivo de licença](../LICENSE) para mais detalhes.

---

Feito com :green_heart: por Alexsandro G Bezerra :wave: &nbsp;[Veja meu LinkedIn](https://www.linkedin.com/in/alexsandrobezerra)
