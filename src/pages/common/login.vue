<template>
   <view class="mainBox">
      <text class="title">登录</text>
      <u--form ref="form" labelPosition="left" :model="form" :rules="formRules" :borderBottom="false" errorType="toast">
         <u-form-item prop="studentNumber">
            <u--input ref="studentNumber" v-model="form.studentNumber" placeholder="学号" border="surround" shape="circle" prefixIcon="account-fill" :prefixIconStyle="prefixIconStyle"></u--input>
         </u-form-item>
         <u-form-item prop="password">
            <u--input ref="password" v-model="form.password" placeholder="密码" border="surround" shape="circle" prefixIcon="lock-fill" :prefixIconStyle="prefixIconStyle"></u--input>
         </u-form-item>
         <u-form-item>
            <view class="bottom">
               <u-button type="primary" @click="login" shape="circle" size="large " text="登录"></u-button>
               <text class="signin" @click="mix_jumpUrl('/pages/common/signIn')">没有账号？点击注册</text>
            </view>
         </u-form-item>
      </u--form>
   </view>
</template>

<script>
import { login_API, getUserInfo_API } from "@service/api";
import { mapMutations } from "vuex";

export default {
   data() {
      return {
         form: {
            studentNumber: null,
            password: null,
         },
         formRules: {
            studentNumber: { type: "string", required: true, message: "请输入学号", trigger: ["blur", "change"] },
            password: { type: "string", required: true, message: "请输入密码", trigger: ["blur", "change"] },
         },
         prefixIconStyle: {
            width: "50rpx",
            height: "50rpx",
         },
      };
   },

   methods: {
      ...mapMutations(["setToken", "setUserInfo"]),
      login() {
         this.$refs.form.validate().then(status => {
            if (status) {
               const res = login_API(this.form);
               if (res.code === 0 || res.code === 200) {
                  this.setToken(res.token);

                  getUserInfo_API(res.accountId).then(res => {
                     const { code, account } = res;
                     if (code === 0 || code === 200) {
                        this.setUserInfo(account);
                        this.mix_jumpUrl("pages/home/home");
                     }
                  });
               }
            }
         });
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   box-sizing: border-box;
   padding: 300rpx 100rpx 0;

   .title {
      text-align: center;
      display: block;
      font-size: 50rpx;
      margin-bottom: 30rpx;
   }

   .bottom {
      .signin {
         display: block;
         margin: 10px 0;
         opacity: 0.75;
         text-align: center;
      }
   }
}
</style>
