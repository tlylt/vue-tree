import type { App } from "vue";
import VueTree from "./components/VueTree.vue";

export { VueTree };

export default {
  install(app: App) {
    app.component("VueTree", VueTree);
  },
};
