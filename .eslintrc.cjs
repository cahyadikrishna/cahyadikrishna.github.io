/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    'es2021': true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    // https://eslint.vuejs.org/user-guide/#using-eslint-v8-x
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
