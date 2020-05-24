module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: 'defaults',
        useBuiltIns: 'entry',
        corejs: '3.6.4'
      }
    ]
  ]
};
