module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 'warn'
  }
}
