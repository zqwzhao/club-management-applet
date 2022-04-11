<template>
   <view class="mainBox">
      <text class="title">注册</text>
      <u--form ref="form" labelPosition="left" :model="form" :rules="formRules" :borderBottom="false" errorType="toast">
         <u-form-item prop="studentNumber">
            <u--input v-model="form.studentNumber" placeholder="姓名" border="surround" shape="circle" prefixIcon="account-fill"></u--input>
         </u-form-item>
         <u-form-item prop="studentNumber">
            <u--input v-model="form.studentNumber" placeholder="学号" border="surround" shape="circle" prefixIcon="tags-fill"></u--input>
         </u-form-item>
         <u-form-item prop="password">
            <u--input v-model="form.password" placeholder="密码" border="surround" shape="circle" prefixIcon="lock-fill"></u--input>
         </u-form-item>
         <u-form-item prop="mobile">
            <u--input v-model="form.mobile" placeholder="手机" border="surround" shape="circle" prefixIcon="phone-fill"></u--input>
         </u-form-item>
         <u-form-item prop="institute">
            <u--input v-model="form.institute" placeholder="专业" border="surround" shape="circle" prefixIcon="calendar-fill"></u--input>
         </u-form-item>
         <u-form-item prop="major">
            <u--input v-model="form.major" placeholder="班级" border="surround" shape="circle" prefixIcon="coupon-fill"></u--input>
         </u-form-item>
         <u-form-item>
            <view class="bottom">
               <u-button type="primary" @click="login" shape="circle" size="large " text="立即注册"></u-button>
               <text class="signin" @click="mix_jumpUrl('/pages/home/home')">我暂时不想注册</text>
            </view>
         </u-form-item>
      </u--form>
   </view>
</template>

<script>
import { signIn_API } from "@service/api";
export default {
   data() {
      return {
         form: {
            studentName: null,
            studentNumber: null,
            password: null,
            mobile: null,
            institute: null,
            major: null,
         },
         formRules: {
            studentName: { type: "string", required: true, message: "请输入姓名", trigger: ["blur", "change"] },
            studentNumber: { type: "string", required: true, message: "请输入学号", trigger: ["blur", "change"] },
            password: { type: "string", required: true, message: "请输入密码", trigger: ["blur", "change"] },
            mobile: { type: "string", required: true, message: "请输入手机", trigger: ["blur", "change"] },
            institute: { type: "string", required: true, message: "请输入专业", trigger: ["blur", "change"] },
            major: { type: "string", required: true, message: "请输入班级", trigger: ["blur", "change"] },
         },
      };
   },
   methods: {
      login() {
         this.$refs.form.validate().then(status => {
            if (status) {
               signIn_API(this.form).then(res => {
                  console.log(res);
               });
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
   padding: 200rpx 100rpx 0;

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
