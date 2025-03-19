# Vue Tree

A simple Vue component to beautify tree-like visualization.

Important note:
User of this component must have `whitespace: 'preserve'` defined in the vue compilerOptions.

vite.config.ts
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

within ts/js
```js
const app = Vue.createApp({
  compilerOptions: {
    whitespace: 'preserve'
  }
})
```