<h2 align="center">
  Javascript API for college project
</h2>

[:brazil: Versão em português](.github/README-PT.md)

## 💁 About the project

A Rest API that provides everything professors need to gamify student tasks. Built with Javascript, this API uses [Express](https://expressjs.com), [Prisma](https://www.prisma.io) and other libraries to facilitate the development speed, and maintenance of the code. Initially, it uses SQLite as its main database. This repository is just a college project :)

To see the **React WEB client**, [click here](https://github.com/AlexsandroBezerra/college-web)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/AlexsandroBezerra/college-api.git
$ cd college-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Run the migrations
$ yarn prisma migrate dev

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

## 🤔 How to contribute?

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork AlexsandroBezerra/college-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd college-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

---

Made with :green_heart: by Alexsandro G Bezerra :wave: &nbsp;[See my Linkedin](https://www.linkedin.com/in/alexsandrobezerra)
