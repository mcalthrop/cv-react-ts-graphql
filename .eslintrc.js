// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'jest-dom',
  ],
  ignorePatterns: [
    'dist',
    'src/graphql-types.tsx', // Ignore generated file
  ],
  rules: {
    curly: 'error',
    'no-empty-pattern': 'off',
    'no-unused-vars': 'off',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore' },
    ],
    'react/self-closing-comp': 'error',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
