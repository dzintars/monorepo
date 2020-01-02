# README

This repository is not exaple of application development. This repository contains an example how to develop own component library/design system and to publish on NPM registry.

Install Yarn
Install Lerna `yarn add lerna -D`
npx lerna init --independent

Enable Yarn workspaces in package.json

```json
  "workspaces": [
    "packages/*"
  ],
```

lerna create ui-icon -y
or
mkdir packages/ui-icon && cd packages/ui-icon && mkdir src && yarn init -y

Enable `"npmClient": "yarn",` in lerna.json
Enable `"useWorkspaces": true,` in lerna.json

yarn add --dev -W typescript
Using -W instructs Yarn to install the given dependencies for the entire workspace. These dependencies are usually shared between all packages.

Modify/create .gitignore

```txt
.log
.DS_Store
.jest-*
lib
node_modules
```

yarn bootstrap

"bootstrap": "lerna bootstrap --use-workspaces",

## ESLint & Prettier

[Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev


This equivalent of npm/yarn publish --access public
Learna does not support --access flag.

## How to set up this project

After you cloned this repository you should install all dependencies. Do it with `yarn run bootstrap`. It will run lerna bootstrap and will look for dependencies for every package in `./packages` directory.

## How to publish

Sign in into your NPM registry by `npm login`

To publish public NPM package in your module package.json you need to add:

```json
  "publishConfig": {
    "access": "public"
  },
```

First you need to build your component/s `yarn run build`
Then you need to commit changes
After you can publish them `yarn run pub`

Lerna will update a package version, push changes to GitHub and publish new version in NPM registry.

## How to unpublish
