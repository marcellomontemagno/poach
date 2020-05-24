# Poach-typescript

[Poach](https://github.com/marcellomontemagno/poach) configuration recipe for [Typescript](https://www.typescriptlang.org/).
  
Needs `@poach/core` installed and configured.

# Installation

`npm i --save-dev @poach/typescript`

# Configuration

Extend your `babel.config.js`

```js
let config = require('@poach/core/config/babel/babel.core');
//...
config = require('@poach/typescript/config/babel/babel.core')(config);
//...
module.exports = config;
```

Extend your `.eslintrc.js`

```js
let config = require('@poach/core/config/eslint/eslint.core');
//...
config = require('@poach/typescript/config/eslint/eslint.core')(config);
//...
module.exports = config;
```

Extend your `webpack.core.js`

```js
let config = require('@poach/core/config/webpack/webpack.core')
//...
config = require('@poach/typescript/config/webpack/webpack.core')(config);
//...
module.exports = config;
```

- Copy the base `tsconfig.json` in the root folder of your project.

```
cp -R node_modules/@poach/typescript/boilerplate/tsconfig.json .
```

You are now able to write `.ts` files in your project.