import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("Checkbox", Checkbox);
app.component("InputText", InputText);
app.component("Button", Button);
app.use(createPinia());
app.use(router);

app.mount("#app");
