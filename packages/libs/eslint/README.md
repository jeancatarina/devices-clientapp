## Package/Eslint

This package contains the eslint configuration that is used throughout the application. This package provide linting rules for JavaScript and TypeScript code, to ensure consistency and maintainability of the codebase.

### Configuration
This package exports the following configuration files:
- `.eslintrc.js`: Eslint configuration file that defines the rules used by eslint

### Usage

You can use eslint in your local machine by running the command `eslint .`

### How to customize the configuration

You can customize the configuration in the `.eslintrc.js` file.

### How to use the package

You should add the package to your devDependencies by running `yarn add @devices/eslint --dev`.

And create a eslint configuration file in the root of your project with the following content:

```
const eslintConfig = require('@devices/eslint')

module.exports = eslintConfig
```
