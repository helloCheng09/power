import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import { Button, Descriptions } from "ant-design-vue";

createApp(App).use(Descriptions).mount("#app");
