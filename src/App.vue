<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { VueTree } from './index.ts'

// import {VueTree} from '@tlylt/vue-tree'
// import '@tlylt/vue-tree/style.css'

</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <VueTree>
  C:/course/
    textbook/
      index.md
    index.md
    reading.md
    site.json
  </VueTree>
</template>