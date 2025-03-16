<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { VueTree } from './index.ts'

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