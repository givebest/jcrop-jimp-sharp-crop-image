module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/prettier',
    'prettier',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  plugins: ['vue'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}