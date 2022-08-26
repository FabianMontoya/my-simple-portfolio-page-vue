/* eslint-env node */
// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution');

const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn'
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json']
      }
    }
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': RULES.ERROR,
    'vue/no-multiple-template-root': RULES.OFF,
    'vue/no-v-model-argument': RULES.OFF,
    '@typescript-eslint/unbound-method': RULES.OFF,
    '@typescript-eslint/no-unsafe-assignment': RULES.OFF,
    'import/extensions': RULES.OFF,
    'import/newline-after-import': RULES.WARN,
    'no-var': RULES.ERROR,
    'no-console': RULES.ERROR,
    'no-debugger': RULES.ERROR
  },
  overrides: [
    {
      files: ['src/store/**/*.ts'],
      rules: {
        'functional/immutable-data': 'off',
        'functional/prefer-readonly-type': 'off',
        'functional/no-return-void': 'off'
      }
    },
    {
      files: ['src/**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off'
      }
    }
  ]
};
