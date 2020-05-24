let config = require('./webpack.core');

config = require('@poach/core/config/webpack/webpack.dev')(config);

module.exports = config;