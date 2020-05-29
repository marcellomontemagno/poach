# Poach
 
Helps transpiling, linting, and bundling node modules for the web.

Poach offers a collection of human-readable recipes making it easy for you to opt-in libraries needing build and lint configuration such as [Typescript](https://www.typescriptlang.org/) and/or [React](https://github.com/facebook/react/).

# Recipes

A recipe is nothing more than a bunch of configuration files and dependencies bundled in a node module for you.

A recipe structure looks something like this:

```
/poach-recipeX
  /boilerplate (files you need to add to your project)
  /config
    /toolY (containing configuration for toolY)
    /toolZ (containing configuration for toolZ)
/package.json (holding the dependencies toolY,Z need)
/README.md (instructions on how to use the recipe)
```

Even if you decide not to use a recipe the recipe structure should be easy for you to inspect if you want to know how a basic configuration for toolY,Z looks like.

The basic features of poach come with the ['@poach/core'](https://github.com/marcellomontemagno/poach/tree/master/packages/poach-core) recipe.

Other recipes are available [here](https://github.com/marcellomontemagno/poach/tree/master/packages).
