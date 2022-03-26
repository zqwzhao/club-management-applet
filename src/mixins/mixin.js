import qs from "qs";

export default {
   install(Vue) {
      Vue.mixin({
         data() {
            return {};
         },
         methods: {
            mix_jumpUrl(url = "", params = {}) {
               const tabUrl = ["/pages/home/home", "/pages/join/join", "/pages/activity/activity", "/pages/my/my"];
               if (tabUrl.indexOf(url) !== -1) {
                  uni.switchTab({ url });
               } else {
                  uni.navigateTo({ url: url + "?" + qs.stringify(params) });
               }
            },
         },
      });
   },
};
