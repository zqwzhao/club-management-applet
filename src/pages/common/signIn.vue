<template>
   <view class="mainBox">
      <text class="title">注册</text>
      <u--form ref="form" labelPosition="left" :model="form" :rules="formRules" :borderBottom="false" errorType="toast">
         <u-form-item prop="studentNumber">
            <u--input v-model="form.studentName" placeholder="姓名" border="surround" shape="circle" prefixIcon="account-fill"></u--input>
         </u-form-item>
         <u-form-item prop="studentNumber">
            <u--input v-model="form.studentNumber" placeholder="学号" border="surround" shape="circle" prefixIcon="tags-fill"></u--input>
         </u-form-item>
         <u-form-item prop="password">
            <u--input v-model="form.password" type="password" placeholder="密码" border="surround" shape="circle" prefixIcon="lock-fill"></u--input>
         </u-form-item>
         <u-form-item prop="mobile">
            <u--input v-model="form.mobile" placeholder="手机" border="surround" shape="circle" prefixIcon="phone-fill"></u--input>
         </u-form-item>
         <u-form-item prop="institute" @click="showInstitute = true">
            <u--input v-model="form.institute" placeholder="专业" border="surround" shape="circle" prefixIcon="calendar-fill" suffixIcon="arrow-right"></u--input>
         </u-form-item>
         <u-form-item prop="major" @click="showClass = true">
            <u--input v-model="form.major" placeholder="班级" border="surround" shape="circle" prefixIcon="coupon-fill" suffixIcon="arrow-right"></u--input>
         </u-form-item>
         <u-form-item>
            <view class="bottom">
               <u-button type="primary" @click="login" shape="circle" size="large " text="立即注册"></u-button>
               <text class="signin" @click="mix_jumpUrl('/pages/home/home')">我暂时不想注册</text>
            </view>
         </u-form-item>
      </u--form>

      <u-picker :show="showInstitute" :columns="institutes" @confirm="institutesConfirm" @cancel="showInstitute = false" :closeOnClickOverlay="true"></u-picker>
      <u-picker :show="showClass" :columns="classList" @confirm="classConfirm" @cancel="showClass = false" :closeOnClickOverlay="true"></u-picker>
   </view>
</template>

<script>
import { signIn_API, getInstitutes_API, getclass_API } from "@service/api";
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
         institutes: [],
         classList: [],
         showInstitute: false,
         showClass: false,
      };
   },
   onShow() {
      uni.clearStorage();
      uni.clearStorageSync();
   },
   created() {
      this.getInstitutes();
   },
   methods: {
      login() {
         this.$refs.form.validate().then(status => {
            if (status) {
               signIn_API(this.form).then(res => {
                  if (res.code === 0 || res.code === 200) {
                     this.mix_jumpUrl("/pages/common/login");
                  }
               });
            }
         });
      },
      getInstitutes() {
         getInstitutes_API().then(res => {
            const { code, institutes } = res;
            if (code === 0 || code === 200) {
               this.institutes.push(institutes);
            }
         });
      },
      institutesConfirm(e) {
         const { value } = e;
         const institute = value[0];
         this.form.institute = institute;
         this.showInstitute = false;

         getclass_API({ institute: institute }).then(res => {
            console.log(res);
            const { code, classList } = res;
            if (code === 0 || code === 200) {
               this.classList.push(classList);
            }
         });
      },
      classConfirm(e) {
         const { value } = e;
         const major = value[0];
         this.form.major = major;
         this.showClass = false;
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
