# Poach-jest

[Poach](https://github.com/marcellomontemagno/poach) configuration recipe for [Jest](https://jestjs.io/).
  
Needs `@poach/core` and `@poach/react` installed and configured.

# Installation

`npm i --save-dev @poach/jest`

# Configuration

Extend your `.eslintrc.js`

```js
let config = require('@poach/core/config/eslint/eslint.core');
//...
config = require('@poach/react/config/eslint/eslint.core')(config); //you should already have this
config = require('@poach/jest/config/eslint/eslint.core')(config);
//...
module.exports = config;
```

- Copy the base `jest.config.js` in the root folder of your project.

```
cp -R node_modules/@poach/jest/boilerplate/jest.config.js .
```

- Add the following to your `package.json`:

```
...
"scripts": {
    ...
    "test": "jest"
    ...
},
...
```

You are now ready to write a [Jest](https://jestjs.io/) test anywhere in your project

```js
//example.test.js
it(`example test`, () => {
  expect(true).toBe(true)
})
```
