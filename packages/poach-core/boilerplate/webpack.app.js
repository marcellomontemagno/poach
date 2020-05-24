let config = require('./webpack.core');

config = require('@poach/core/config/webpack/webpack.app')(config);

module.exports = config;