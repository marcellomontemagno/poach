# Poach-core

The base [Poach](https://github.com/marcellomontemagno/poach) recipe.

This recipe configures the following tools

- [Webpack](https://webpack.js.org/)
- [ESlint](https://eslint.org/)
- [Babel](https://babeljs.io/)

in order to provide the following features

- Modern javascript.
- Code linting.
- Dev server with live reload.
- Ability to build your project as a static app.
- Ability to build your project as a [UMD](https://github.com/umdjs/umd).

We advise you get at least familiar with the mentioned tools before using this recipe.

# Setup

- Create a standard node module

```
mkdir your-project && cd $_ && npm init 
```

- Install `@poach/core` as a dev dependency of your project:

```
npm i --save-dev @poach/core
```
  
- Add the following to your `package.json`:

```
...
"main": "dist/umd/umd.js",
"scripts": {
    ...
    "build:app": "webpack --config webpack.app.js",
    "build:umd": "webpack --config webpack.umd.js",
    "build": "npm run build:app && npm run build:umd",
    "start": "webpack-dev-server --config webpack.dev.js"
    ...
},
...
```

- Copy the content of `node_modules/@poach/core/src/boilerplate` in the root folder of your project.

```
cp -R node_modules/@poach/core/boilerplate/ .
```

That's it, you can now use the following scripts:

- `npm run start` will start your application in development mode using `src/index.js` as entry point.
- `npm run build:app` will bundle your code as a static web application using `src/index.js` as entry point and `dist/app` as output directory.
- `npm run build:umd` will bundle your code as [UMD](https://github.com/umdjs/umd) using `src/module/index.js` as entry point and `dist/umd/umd.js` as output.
- `npm run build` will start `npm run build:app` and `npm run build:umd` one after the other.
 
# How is this different from a boilerplate project?

Notice that most of the files you just copied form `node_modules/@poach/core/src/boilerplate` don't do anything else but importing configuration form `@poach/core`.

Importing base configuration from `@poach/core` instead of just pasting it within your files is useful because it will give poach a chance to improve/upgrade the configuration when you upgrade the poach version in your package.json.

Copying files in your root directory is useful for the following reasons:

- Given that these files are in the root folder of your project your IDE will be able to use them automatically.
- You can use these files to customize the configuration coming from `@poach/core` if needed.

That's it, if you inspect your project there is nothing hidden from you, the project should have a simple and familiar structure.

# What's next 

Let's say you want to add [Typescript](https://www.typescriptlang.org/) and/or [React](https://github.com/facebook/react/) to your project you can simply install the related recipes. 

Recipes are available [here](https://github.com/marcellomontemagno/poach/tree/master/packages).