---
outline: deep
---

# Vitepress Example

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

In your `.vitepress/config.ts`:

```ts
export default defineConfig({
  // ...
  vue: {
    // @vitejs/plugin-vue options
    template: {
      compilerOptions: {
        whitespace: "preserve",
      },
    }
  }
})
```

## Code

```vue
<script setup>
import { VueTree } from '@tlylt/vue-tree'
import '@tlylt/vue-tree/style.css'
</script>

<VueTree>
C:/course/
  textbook/
    index.md
  index.md
  reading.md
  site.json
</VueTree>
```

## Rendered

<script setup>
import { VueTree } from '../src/index'
// import { VueTree } from '@tlylt/vue-tree'
// import '@tlylt/vue-tree/style.css'
</script>

<VueTree>
C:/course/
  textbook/
    index.md
  index.md
  reading.md
  site.json
</VueTree>
