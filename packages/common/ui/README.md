## Package/UI

This package contains shared UI components that are used throughout the frontend of the application.

### Usage
You can import these components in your code and use them to build the UI of your application.

For example, to use the `LoadingCard` component:
```
import { LoadingCard } from "@devices/ui";
```

You can also import and use the styles and animations from Chakra UI, Emotion, Framer Motion and React-Select.

For example, to use the `Text` component from Chakra UI:
```
import { Text } from "@devices/ui";
```

For example, to use the `styled` function from Emotion:

```
import { styled } from "@devices/ui";

styled.default.div`
display: flex;
`
`
```

For example, to use the `motion` object from Framer Motion:

```
import { motion } from "@devices/ui";
```

### How to add new components

If you need to add a new component to the package, you can add it to the `src/components` folder and export it in the `index.ts` file. It is recommended to follow the naming convention and structure used by the existing components for consistency.

### How to use the package

You can import the components, functions, and types from this package and use them in your code.
You should also add the package to your dependencies by running `yarn add @devices/ui`.