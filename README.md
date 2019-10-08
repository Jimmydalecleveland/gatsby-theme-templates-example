# An example of shadowing issues/questions when using Gatsby Themes.

After cloning the repo, run the following in the cloned directory to start the example server
```bash
yarn && yarn workspace example develop
```

The master branch should build and run fine (see that the homepage has a striped heading with the text "Customized Homepage in a user's site". Further branch descriptions can be found below.

Then checkout the :beetle: not working branch and run the same develop command:
```bash
git checkout folder-imports-not-working
yarn workspace example develop
```

When you reload the homepage you should see a frozen white page.

Finally, check out the final workaround branch to see a working solution:
```bash
git checkout folder-imports-workaround
yarn workspace example develop
```

Again, look below for further details about the branches.

## Branches
Please check out the following branches to see the different problems and workarounds.

### `master` - A working standard example of component shadowing
This is just a starting point to show a normal usage of the system working, it can be skipped if you'd like to go straight to the problem.

### :beetle:`folder-imports-not-working` - A non-working example of component shadowing from folders
This example uses the folder pattern for components where the `index.js` is the component itself, and it's associated styles, tests, and stories live in the same folder.

Unfortunately this creates a circular import infinite loop clientside when attempting to shadow the folder.

### `folder-imports-workaround` - A possible workaround of component shadowing from folders
This final example shows a workaround for the foldered components. It simply takes advantage of how imports go off of file names first then folders with an `index.js` by creating a file by the same name as the folder you wish to shadow.
