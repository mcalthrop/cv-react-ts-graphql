# cv-react-ts-graphql

> Source code for my online CV: React, TypeScript, and GraphQL

## Overview

This codebase contains the source for my online CV: [cv.mattcalthrop.com](https://cv.mattcalthrop.com/).

It uses the following features:

- [React](https://reactjs.org/) for building the UI
- [Chakra](https://chakra-ui.com/) for the design framework
- [Contentful](https://www.contentful.com/) for hosting the content, and providing the GraphQL schema
- [Yarn](https://yarnpkg.com/en/) for dependency management
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://github.com/typicode/husky) to leverage git commit hooks
- [GitHub Actions](https://docs.github.com/en/actions) for CI workflow
- [Netlify](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/) for deployment and hosting

You can fork this repo, and run it locally yourself. Following are instructions for setting it up and running it.

## Setup

### Install nvm

Follow instructions here:

[github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#readme)

Then download and install the correct version of `node`:

```sh
nvm install
```

### Install yarn

Follow the instructions here:

[yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install NodeJS packages

Install the NodeJS packages:

```sh
yarn
```

## Running the app

### During development

```sh
yarn start:dev
```

This will open a web browser at this URL:

[http://localhost:3000/](http://localhost:3000/)

## Tests

### All

To run all tests:

```sh
yarn test
```

### Linting

> Check `.eslintrc.js` for the eslint rules.

To run the linter:

```sh
yarn lint
```

And to auto-correct any errors that can be corrected:

```sh
yarn lint:fix
```

### Code formatting

> Check `.prettierrc.json` for the Prettier rules.

To check the TypeScript formatting:

```sh
yarn prettier
```

And to auto-correct any errors that can be corrected:

```sh
yarn prettier:fix
```

## License

[MIT](LICENSE)
