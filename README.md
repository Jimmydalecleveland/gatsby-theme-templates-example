# An example of shadowing issues/questions when using Gatsby Themes.

run the following to start the example server
`yarn workspace example develop`

## Branches
Please check out the following branches to see the different problems and workarounds.

### master - A working standard example of component shadowing
This is just a starting point to show a normal usage of the system working, it can be skipped if you'd like to go straight to the problem.

### folder-imports-not-working - A non-working example of component shadowing from folders
This example uses the folder pattern for components where the `index.js` is the component itself, and it's associated styles, tests, and stories live in the same folder.

Unfortunately this creates a circular import infinite loop clientside when attempting to shadow the folder.

### folder-imports-workaround - A possible workaround of component shadowing from folders
This final example shows a workaround for the foldered components. It simply takes advantage of how imports go off of file names first then folders with an `index.js` by creating a file by the same name as the folder you wish to shadow.