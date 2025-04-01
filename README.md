# Vue Tree

A simple Vue component to beautify tree-like visualizations.

## Features
- Render tree-like structures in a visually appealing way.
- Fully customizable and lightweight.
- Supports scoped styles for seamless integration.

## Installation

Install the package via npm:

```bash
npm install @tlylt/vue-tree
```

or yarn:

```bash
yarn add @tlylt/vue-tree
```

## Usage

### Basic Usage

Import and register the component in your Vue application:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { VueTree } from '@tlylt/vue-tree';

const app = createApp(App);
app.use(VueTree);
app.mount('#app');
```

### Example

Use indentation (2 spaces) to indicate the level of nesting:
```vue
<template>
  <VueTree>
  C:/course/
    textbook/
      index.md
    index.md
    reading.md
    site.json
  </VueTree>
</template>
```

Expected:
```
C:/course/
├── textbook/
│   └── index.md
├── index.md
├── reading.md
└── site.json
```



## Important Notes

To use this component, you must configure `whitespace: 'preserve'` in the Vue compiler options. This ensures that the tree structure is rendered correctly.

### Vite Configuration

Add the following to your `vite.config.ts`:

```ts
plugins: [vue(
  {
    template: {
      compilerOptions: {
        whitespace: "preserve",
      },
    }
  }
)],
```

### Vue Configuration

If you are using Vue programmatically, configure the compiler options as follows:

```js
const app = Vue.createApp({
  compilerOptions: {
    whitespace: 'preserve'
  }
});
```

### Props
WIP

Add details about the props supported by the component.

### Events
WIP

Document any events emitted by the component.

### Slots
WIP

Explain the slots available for customization.

### Customization
WIP

Provide details on how to customize the component, such as styles or additional options.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.