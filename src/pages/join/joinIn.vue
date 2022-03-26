<template>
   <view class="mainBox">
      <view class="clubInfo">
         <image src="" mode="widthFix" />
         <view class="info">
            <text class="name">{{ info.name }}</text>
            <view class="line"></view>
            <text class="other">社团分类：{{ info.category }}</text>
            <view class="line"></view>
            <text class="other">管理部门：{{ info.department }}</text>
         </view>
      </view>
      <view class="formBox">
         <u-form :model="userInfo" :rules="rules" labelPosition="left" labelWidth="60" :labelStyle="labelStyle">
            <u-form-item label="真实姓名" prop="name">
               <u--input v-model="userInfo.name" placeholder="请输入您的姓名"></u--input>
            </u-form-item>
            <u-form-item label="身份证号" prop="idCard">
               <u--input v-model="userInfo.idCard" placeholder="请输入您的身份证号"></u--input>
            </u-form-item>
            <u-form-item label="学生性别" prop="sex">
               <u-radio-group v-model="userInfo.sex" shape="circle">
                  <u-radio name="1" label="男"></u-radio>
                  <u-radio name="2" label="女"></u-radio>
               </u-radio-group>
            </u-form-item>
         </u-form>
      </view>
   </view>
</template>

<script>
import { getClubInfoAPI } from "@/service/api";
export default {
   data() {
      return {
         info: {},
         userInfo: {
            name: "",
            idCard: "",
            sex: "1",
         },
         rules: {
            name: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
            idCard: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
            sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
         },
         labelStyle: { "font-size": "30rpx" },
      };
   },
   watch: {
      userInfo: {
         handler(val) {
            console.log(val);
         },
         deep: true,
      },
   },
   onLoad(params) {
      const { id } = params;
      this.getClubInfo(id);
   },
   methods: {
      async getClubInfo(id) {
         const info = getClubInfoAPI({ id });
         this.info = info;
      },
      submit() {},
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   .clubInfo {
      width: 85vw;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      image {
         width: 180rpx;
         height: auto;
         flex-shrink: 0;
      }
      .info {
         flex: 1;
         box-sizing: border-box;
         padding: 30rpx 0;
         .name {
            font-size: 30rpx;
            font-weight: 500;
         }
         .line {
            width: 100%;
            border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
            margin: 20rpx 0;
         }
         .other {
            font-size: 30rpx;
            color: rgba($color: #000000, $alpha: 0.5);
         }
      }
   }
   .formBox {
      width: 85vw;
      margin: auto;
   }
}
</style>
