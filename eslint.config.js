import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import next from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import jestDom from 'eslint-plugin-jest-dom';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react,
      next,
      'react-hooks': reactHooks,
      'jest-dom': jestDom,
      'unused-imports': unusedImports,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jestDom.configs.recommended.rules,
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
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '.next',
      'next-env.d.ts',
      'dist/**',
      'coverage/**',
      'src/components/chakra/**',
      'src/graphql/generated/**',
    ],
  },
];
