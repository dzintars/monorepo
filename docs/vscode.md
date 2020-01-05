# VS Code

## Reload VS Code

When tweaking VS Code settings you sometimes need to reload VS Code.
Sure, you can close it and open it, navigaet to the project, but there is easier option.
Press `CTRL + SHIFT + P` and execute `Reload Window`.

## Per-project configuration

You can create `./.vscode/settings.json` directory and file to ovverride global VS Code settings.
Sometime users add `\.vscode/` to their `.gitignore` just to avoid their settings commiting to Git repository.
This is more important if you work in team, because that would cause everybody to ovverride original settings.
If you are a single developer in your project, then it could be OK to commit your VS Code settings.
As i am trying to make boilerplate project, i will commit my settings. Moreover, they expose some of my tweaks related to Prettier and EsLint.
