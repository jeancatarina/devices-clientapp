## Package/Utils

This package contains common utilities that are used throughout the application. These utilities provide helpful functions that can be reused across different parts of the application.

### Utilities
This package exports the following utilities:
- `lodash`: A popular JavaScript utility library that provides helpful functions for working with arrays, numbers, objects, and strings.

### Usage
You can import these utilities in your code and use them to perform common tasks.

For example, to use the `lodash` utility:
```
import { lodash } from "@devices/utils";
```

### How to add new utilities

If you need to add a new utility to the package, you can add it to the `src/utils` folder and export it in the `index.ts` file. It is recommended to follow the naming convention and structure used by the existing utilities for consistency.

### How to use the package

You can import the utilities from this package and use them in your code.
You should also add the package to your dependencies by running `yarn add @devices/utils`.