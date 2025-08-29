import type { CodegenConfig } from '@graphql-codegen/cli';
import { createContentfulGraphQlSchemaUri } from './src/contentful';

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: createContentfulGraphQlSchemaUri(),
  documents: 'src/graphql/*.{query,fragment}.graphql',
  generates: {
    './src/graphql-types.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        enumsAsTypes: true,
        maybeValue: 'T | undefined',
      },
    },
  },
};

export default codegenConfig;
