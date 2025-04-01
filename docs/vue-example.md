# Vue Example

## Installation
Install the package via npm:

```bash
npm install @tlylt/vue-tree
```

or yarn:

```bash
yarn add @tlylt/vue-tree
```

## Configuration
To ensure proper rendering of the tree structure, you need to configure the Vue compiler to preserve whitespace. Update your `vite.config.ts` as follows:

```ts
// https://vite.dev/config/
export default defineConfig({
  // ...
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          whitespace: "preserve",
        },
      }
    }
  )],
})
```

## Code
You can locally register the `VueTree` component in your Vue file:

```vue
<script setup lang="ts">
import { VueTree } from '@tlylt/vue-tree'
import '@tlylt/vue-tree/style.css'
</script>

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

Alternatively, you can register the `VueTree` component globally in your `main.ts`:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { VueTree } from '@tlylt/vue-tree';
import '@tlylt/vue-tree/style.css'; // Import the styles

const app = createApp(App);
app.use(VueTree);
app.mount('#app');
```

## Rendered

<script setup>
import { VueTree } from '../src/index'
</script>

<VueTree>
C:/course/
  textbook/
    index.md
  index.md
  reading.md
  site.json
</VueTree>
