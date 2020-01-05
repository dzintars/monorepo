# NPM

Prefer `package.jsom#files` over `.npmignore`. Npmignote tells NPM not to include those files in your package which will be published into registry. Files says which files to include.
If your package is growing, then you constantly need to monitor .npmignore to include things you want to exclude.
Telling what you want to include is much more easier.
