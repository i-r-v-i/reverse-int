module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2024: true,
    node: true,
    mocha: true,
  },
  extends: ['plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2024,
  },
  noInlineConfig: true,
};
