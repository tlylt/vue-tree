<template>
    <p>From Slot</p>
    <pre class="vue-tree">{{ treeVisualized }}</pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeNode } from './tree';

export default defineComponent({
    name: 'VueTree',
    data() {
        return {
            treeRaw: '',
            treeVisualized: ''
        };
    },
    mounted() {
        if (this.$slots.default) {
            const slotNodes = this.$slots.default();
            this.treeRaw = slotNodes.map(node => node.children).join('');
            // Assign the transformed slot content to the tree variable
            this.treeVisualized = this.treeRaw;
        }
    },
    beforeUpdate() {
        if (this.$slots.default) {
            const slotNodes = this.$slots.default();
            this.treeRaw = slotNodes.map(node => node.children).join('');
            this.treeVisualized = this.treeRaw;
            this.treeVisualized = TreeNode.visualize(this.treeRaw);
        }
    }
});
</script>

<style scoped>
.vue-tree {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
    white-space: pre;
    font-family: "Fira Code", "Fira Mono", monospace;
    font-size: 0.9375rem;
    line-height: 1.5;
    overflow-x: auto;
}
</style>