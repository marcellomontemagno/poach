# Poach-react

[Poach](https://github.com/marcellomontemagno/poach) configuration recipe for [React](https://reactjs.org/).

Needs `@poach/core` installed and configured.

# Installation

`npm i --save-dev @poach/react`

# Configuration

Extend your `babel.config.js`

```js
let config = require('@poach/core/config/babel/babel.core');
//...
config = require('@poach/react/config/babel/babel.core')(config);
//...
module.exports = config;
```

Extend your `.eslintrc.js`

```js
let config = require('@poach/core/config/eslint/eslint.core');
//...
config = require('@poach/react/config/eslint/eslint.core')(config);
//...
module.exports = config;
```

Extend your `webpack.core.js`

```js
let config = require('@poach/core/config/webpack/webpack.core')
//...
config = require('@poach/react/config/webpack/webpack.core')(config);
//...
module.exports = config;
```

Render you first react component in `src/index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const div = document.createElement("div");
div.setAttribute("id", "react-root");
document.body.appendChild(div);

ReactDOM.render(<h1>React hello world!</h1>, div);
```

