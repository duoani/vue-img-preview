import Vue from "vue";
import Dev from "./Dev.vue";
import VueImgPreview from '../src/index'

Vue.use(VueImgPreview, {
  zIndex: 78
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dev)
}).$mount("#app");
