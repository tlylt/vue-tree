<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import VueTree from './components/VueTree.vue'

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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
