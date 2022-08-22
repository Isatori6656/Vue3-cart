import { createApp } from "vue";
import { createPinia } from "pinia";

// import App from "./App.vue";
import ShoppingCart from "./AppShoppingCart.vue";
import router from "./router";

import "./assets/main.css";

// const app = createApp(App);
const app = createApp(ShoppingCart);

app.use(createPinia());
app.use(router);

app.mount("#app");
