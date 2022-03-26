<template>
   <view class="mainBox">
      <u-form :labelStyle="labelStyle" :model="form" :rules="rules" labelPosition="left" labelAlign="center" labelWidth="80">
         <u-form-item label="昵称" prop="nickname" borderBottom>
            <u-input v-model="form.nickname" border="none"></u-input>
         </u-form-item>
         <u-form-item label="学生姓名" prop="name" borderBottom>
            <u-input v-model="form.name" border="none"></u-input>
         </u-form-item>
         <u-form-item label="身份证号" prop="idCard" borderBottom>
            <u-input v-model="form.idCard" border="none"></u-input>
         </u-form-item>
         <u-form-item label="绑定手机" prop="phone" borderBottom>
            <u-input v-model="form.phone" border="none"></u-input>
         </u-form-item>
         <u-form-item label="学生性别" prop="sex">
            <u-radio-group v-model="form.sex">
               <u-radio label="男" name="1" value="1"></u-radio>
               <u-radio label="女" name="2" value="2"></u-radio>
            </u-radio-group>
         </u-form-item>
      </u-form>
   </view>
</template>

<script>
export default {
   data() {
      return {
         form: {
            nickname: "0",
            name: "",
            idCard: "",
            phone: "",
            sex: "",
         },
         rules: {
            nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
            name: [{ required: true, message: "请输入学生姓名", trigger: "blur" }],
            idCard: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
            phone: [{ required: true, message: "请输入绑定手机", trigger: "blur" }],
            sex: [{ required: true, message: "请选择学生性别", trigger: "blur" }],
         },
         labelStyle: {
            "font-size": "30rpx",
         },
      };
   },
   created() {
      this.setRules();
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
