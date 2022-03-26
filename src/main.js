import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

App.mpType = "app";

import uView from "uview-ui";
Vue.use(uView);

import mixin from "./mixins/mixin";
Vue.use(mixin);

new Vue({ ...App }).$mount();
