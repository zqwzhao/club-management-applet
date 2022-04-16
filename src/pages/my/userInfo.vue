<template>
   <view class="mainBox">
      <u-form :labelStyle="labelStyle" :model="form" :rules="rules" labelPosition="left" labelAlign="center" labelWidth="80">
         <u-form-item label="昵称" prop="nickname" borderBottom>
            <u-input v-model="form.nickname" border="none"></u-input>
         </u-form-item>
         <u-form-item label="姓名" prop="studentName" borderBottom>
            <u-input v-model="form.studentName" border="none"></u-input>
         </u-form-item>
         <u-form-item label="学号" prop="studentNumber" borderBottom>
            <u-input v-model="form.studentNumber" border="none"></u-input>
         </u-form-item>
         <u-form-item label="手机" prop="mobile" borderBottom>
            <u-input v-model="form.mobile" border="none"></u-input>
         </u-form-item>
         <u-form-item label="性别" prop="gender">
            <u-radio-group v-model="form.gender">
               <u-radio label="男" name="男" value="男"></u-radio>
               <u-radio label="女" name="女" value="女"></u-radio>
            </u-radio-group>
         </u-form-item>
         <u-form-item label="系别" prop="studentName">
            <u-input v-model="form.institute" border="none"></u-input>
         </u-form-item>
         <u-form-item label="班级" prop="studentName">
            <u-input v-model="form.major" border="none"></u-input>
         </u-form-item>
      </u-form>
   </view>
</template>

<script>
import { mapState } from "vuex";
export default {
   data() {
      return {
         form: {
            accountId: "",
            createTime: "",
            gender: "",
            institute: "",
            major: "",
            mobile: "",
            nickname: "",
            password: "",
            picture: "",
            studentName: "",
            studentNumber: "",
         },
         rules: {
            nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
            studentName: [{ required: true, message: "请输入学生姓名", trigger: "blur" }],
            studentNumber: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
            mobile: [{ required: true, message: "请输入绑定手机", trigger: "blur" }],
            gender: [{ required: true, message: "请选择学生性别", trigger: "blur" }],
         },
         labelStyle: {
            "font-size": "30rpx",
         },
      };
   },
   computed: {
      ...mapState({
         userInfo: state => state.userInfo,
      }),
   },
   onShow() {
      this.form = this.userInfo;
   },
   methods: {},
};
</script>

<style lang="scss" scoped>
.from {
   width: 90vw;
   margin: auto;
   .code {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .send-messages {
         margin-left: 30rpx;
      }
   }
   .mask {
      flex: 1;
      position: relative;
      .maskSon {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 10;
         padding-right: 20rpx;
         box-sizing: border-box;
         display: flex;
         align-items: center;
         justify-content: flex-end;
      }
   }
}
</style>
