# Arubaito

Arubaito is a set of **UI Components** and **Utility Classes**.

It can be imported via `devDependencies`.</br>
*(Make sure you have .npmrc setup with a valid access token in order to access to the private Github Package)*

```
    //npm.pkg.github.com/:_authToken=TOKEN
    @capterra:registry=https://npm.pkg.github.com
```

Please see [Styleguide](https://capterra.github.io/arubaito/) for a list of components, utility classes and design tokens.

## Available Scripts

In the project directory, you can run the following scripts:

**Start the App**

```sh 
    npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:6060/](http://localhost:6060/) to view it in the browser.

The page will reload if you make edits.

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Run Test**

```sh 
    npm test
```
Launches the test runner.

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Run Test in watch mode**

```sh 
    npm test:watch
```

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Run Test in debugging mode**

```sh
    npm test:debug
```
Launches the test runner with debugger attached.<br />
See [Debugging NodeJs](https://nodejs.org/en/docs/guides/debugging-getting-started/)

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Clear Test Cache**

```sh
    npm test:clear
```
Clears the Jest Cache.

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Build Styleguide**

```sh
    npm run build:guide
```
Builds the styleguide app for production to the `styleguide` folder.<br />
Your app is ready to be deployed!

See [React Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html) for more information.

<p>&nbsp;</p>

---

<p>&nbsp;</p>

**Builds Components and Utility Classes**

```sh
    npm run build:components
```

Builds the component modules for production to the `dist` folder.<br />
Builds the minified utility css files for production to the `dist` folder.<br />
Builds the assets `dist/assets` folder.<br />

# Basic Style Dictionary

It can be imported via `devDependencies`.</br>
*(Make sure you have .npmrc setup with a valid access token in order to access to the private Github Package)*

```
    //npm.pkg.github.com/:_authToken=TOKEN
    @capterra:registry=https://npm.pkg.github.com
```


To build all token files cd into this directory and run:
```bash
npm run build
```

You should see something like this output:
```
Reading config file from ./config.json
Building all platforms

assets/embed/json
✔︎ build/json/assets_icons.json
✔︎ build/json/assets_fonts.json

scss
✔︎ build/scss/variables-color.scss
✔︎ build/scss/variables-font.scss
✔︎ build/scss/variables-motion.scss
✔︎ build/scss/variables-sass-map.scss
✔︎ build/scss/variables-shape.scss
✔︎ build/scss/variables-size.scss

js
✔︎ build/js/variables.js

module
✔︎ build/modules/variables.js

sketch
✔︎ build/sketch/variables.sketchpalette
```

This should have created a build directory and it should look like this:
```
├── json/
│   ├── assets_icons.json
│   ├── assets_fonts.json
├── scss/
│   ├── variables-color.scss
│   ├── variables-font.scss
│   ├── variables-motion.scss
│   ├── variables-sass-map.scss
│   ├── variables-shape.scss
│   ├── variables-size.scss
├── js/
│   ├── variables.js

etc.
```

If you open `config.json` you will see there are 5 platforms defined: assets, scss, js, module, sketch. Each platform has a transformGroup, buildPath, and files. The buildPath and files of the platform should match up to the files what were built. SCSS Example:

**SCSS**
```scss
// variables.scss
$color-base-gray-light: #CCCCCC;
$color-base-gray-medium: #999999;
$color-base-gray-dark: #111111;
$color-font-base: #111111;
$color-font-secondary: #999999;
$color-font-tertiary: #CCCCCC;
$size-font-small: 0.75rem;
$size-font-medium: 1rem;
$size-font-large: 2rem;
$size-font-base: 1rem;
```

Pretty nifty! This shows a few things happening:
1. The build system does a deep merge of all the property JSON files defined in the `source` attribute of `config.json`. This allows you to split up the property JSON files however you want. If there are 2 JSON files with the same category name like `color`, they get merged properly.
1. The build system resolves references to other style properties. `{size.base.sm.value}` gets resolved properly
1. The build system handles references to property values in other files as well.

**Huzzah!**

See [transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) and [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats) for built-in examples.
