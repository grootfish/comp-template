import Vue from "vue";
import App from "./App.vue";

import Componet from "../src/index";
import "../src/style/index.less";

// 注册组件库
Vue.use(Componet);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
