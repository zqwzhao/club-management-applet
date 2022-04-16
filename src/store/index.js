import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      token: uni.getStorageSync("token") || null,
      userInfo: uni.getStorageSync("userInfo") || null,
   },
   mutations: {
      setToken(state, val) {
         state.token = val
         uni.setStorageSync("token", val);
      },
      setUserInfo(state, val) {
         state.userInfo = val
         uni.setStorageSync("userInfo", val);
      },
   },

})