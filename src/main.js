import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "@/assets/css/extra_styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import the components you want to route to
import AboutComponent from "./components/AboutComponent.vue";
import BodyTemplate from "./components/FrontBody.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";

// Define routes
const routes = [
  { path: "/", component: BodyTemplate },
  { path: "/about", component: AboutComponent },
  { path: "/:catchAll(.*)", component: NotFoundComponent },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create Vue app
const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount("#app");
