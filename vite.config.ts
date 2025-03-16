import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(
    {
      template: {
        compilerOptions: {
          whitespace: "preserve",
        },
      }
    }
  )],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueTree",
      fileName: (format) => `vue-tree.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
