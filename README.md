# cv-react-ts-graphql

> Source code for my online CV: React, TypeScript, and GraphQL

## Overview

This codebase contains the source for my online CV: [cv.mattcalthrop.com](https://cv.mattcalthrop.com/).

The application follows a modern React/Next.js architecture with a content-driven approach:

- **Frontend Framework**: Built with [Next.js](https://nextjs.org/) using [React Server Components](https://react.dev/reference/rsc/server-components) for optimal performance
- **Content Management**: [Contentful CMS](https://www.contentful.com/) serves as a headless CMS, allowing changes to content without redeploying the application
- **Data Layer**: [Apollo Client](https://www.apollographql.com/docs/react/) handles data fetching and caching via Contentful's GraphQL API
- **Component Structure**: Modular component architecture using the [Chakra UI](https://chakra-ui.com/) component library
- **Data Flow**: Server-side data fetching via `fetchCvData()` function that queries Contentful's GraphQL API
- **Type Safety**: Full [TypeScript](https://www.typescriptlang.org/) integration with generated GraphQL types for end-to-end type safety
- **Styling**: Chakra UI component library provides responsive design and theming capabilities
- **Testing**: Unit tests with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting & Formatting**: [oxlint](https://oxc.rs/docs/guide/usage/linter) and [Prettier](https://prettier.io/) for code quality and consistency
- **Dead Code Analysis**: [knip](https://knip.dev/) identifies unused dependencies, exports, and files to maintain a clean codebase
- **Dependency Management**: [Renovate](https://docs.renovatebot.com/) automatically manages dependency updates with intelligent grouping and scheduling
- **CI/CD**: [GitHub Actions](https://docs.github.com/en/actions) workflow for linting, testing, and deploying the application
- **Deployment**: Statically generated site deployed on [Vercel](https://vercel.com/) with automated deployments via GitHub

## Setup

You can fork this repo, and run it locally yourself. Following are instructions for setting it up and running it.

### Install nvm

Follow instructions here:

[github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm#readme)

Then download and install the correct version of `node`:

```sh
nvm install
```

### Install pnpm

Follow the instructions here:

[pnpm.io/installation](https://pnpm.io/installation)

### Install NodeJS packages

Install the NodeJS packages:

```sh
pnpm install
```

## Running the app

### During development

```sh
pnpm start:dev
```

This will open a web browser at this URL:

[http://localhost:3000/](http://localhost:3000/)

## Tests

### All

To run all tests:

```sh
pnpm test
```

### Linting

> Check `eslint.config.js` for the eslint rules.

To run the linter:

```sh
pnpm lint
```

And to auto-correct any errors that can be corrected:

```sh
pnpm lint:fix
```

### Code formatting

> Check `.prettierrc.json` for the Prettier rules.

To check the TypeScript formatting:

```sh
pnpm format
```

And to auto-correct any errors that can be corrected:

```sh
pnpm format:fix
```

## Building & compilation

To build the app:

```sh
pnpm build
```

With bundle analysis:

```sh
ANALYZE=true pnpm build
```

To check the TypeScript compilation:

```sh
pnpm compile
```

## License

[MIT](LICENSE)
