import type { CodegenConfig } from '@graphql-codegen/cli';
import { createContentfulGraphQlSchemaUri } from './src/contentful';

const schemaUri = createContentfulGraphQlSchemaUri();
console.log('Using schema URI:', schemaUri);

const codegenConfig: CodegenConfig = {
  overwrite: true,
  schema: schemaUri,
  documents: 'src/graphql/*.{query,fragment}.graphql',
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      config: {
        maybeValue: 'T | null',
        withHooks: false,
      },
      presetConfig: {
        dedupeFragments: true,
        enumsAsTypes: true,
        fragmentMasking: false,
        skipTypename: true,
        useTypeImports: true,
      },
    },
  },
};

export default codegenConfig;
