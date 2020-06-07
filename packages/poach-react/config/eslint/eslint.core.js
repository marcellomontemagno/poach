function configure(config) {
  return {
    ...config,
    env: {
      ...config.env
    },
    extends: [
      ...config.extends,
      'plugin:react/recommended',
      'plugin:react-hooks/recommended'
    ],
    plugins: [
      'react',
      'react-hooks',
      ...(config.plugins || [])
    ],
    settings: {
      ...(config.settings || {}),
      react: {
        version: "detect" //todo remove this once the new eslint major is released
      }
    },
    rules: {
      ...config.rules,
      'react/prop-types': 'off'
    }
  }
}

module.exports = configure
