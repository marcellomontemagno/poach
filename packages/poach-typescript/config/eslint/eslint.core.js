function configure(config) {
  return {
    ...config,
    extends: [
      ...config.extends,
      'plugin:@typescript-eslint/eslint-recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
      ...(config.plugins || []),
      '@typescript-eslint'
    ],
    rules: {
      ...config.rules,
      //no-unused-vars has non working edge cases with typescript:
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
}

module.exports = configure
