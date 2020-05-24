let config = require('./webpack.core');

config = require('@poach/core/config/webpack/webpack.umd')(config);

module.exports = config;