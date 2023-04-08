import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

const app = createApp(App);
app.use(router);

app.use(VueGtag, {
  config: { id: "G-3JN6ZSMD47" },
});

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
