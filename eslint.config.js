import eslint from '@eslint/js';
import vue from 'eslint-plugin-vue';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      vue,
      '@typescript-eslint': ts,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },
  prettier,
];
