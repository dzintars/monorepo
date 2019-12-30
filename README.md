# README

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
