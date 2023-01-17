## Package/Types

This package contains common types that are used throughout the application. These types are used to define the shape of the data that is passed around the different parts of the application.

### Usage
You can import these types in your code and use them to define the shape of the data that your components or functions expect.

For example, to use the `Device` type:
import { Device } from "@devices/types";

### How to add new types

If you need to add a new type to the package, you can add it to the `src/types` folder and export it in the `index.ts` file. It is recommended to follow the naming convention and structure used by the existing types for consistency.

### How to use the package

You can import the types from this package and use them in your code.
You should also add the package to your dependencies by running `yarn add @devices/types`