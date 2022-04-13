<template>
   <view class="mainBox">
      <image class="bgimg" :src="clubInfo.logo" mode="aspectFill" />
      <view class="introduce">
         <view class="nameBox cardShadow">
            <view class="nameBox_left">
               <text class="name">{{ clubInfo.clubName }}</text>
               <text class="joinNum">
                  社团QQ群：
                  <text>{{ clubInfo.clubQq }}</text>
               </text>
            </view>
            <view class="nameBox_right">
               <u-icon name="eye-fill" color="#606266" size="14"></u-icon>
               <text>{{ clubInfo.watchNum }}</text>
            </view>
         </view>
         <text class="subjection">
            社团分类：
            <text>{{ clubInfo.clubType }}</text>
         </text>
         <text class="subjection">
            管理部门：
            <text>{{ clubInfo.clubInstitute }}</text>
         </text>
         <view class="columnTitle" enable-flex="true">
            <view class="leftLine"></view>
            <text>社团介绍</text>
         </view>
         <text class="introduceText">{{ clubInfo.clubDescribe }}</text>
      </view>
      <view class="bottomBox">
         <view class="iconBox" @click="mix_jumpUrl('/pages/home/home')">
            <u-icon name="home" color="#333333" size="24"></u-icon>
            <text>首页</text>
         </view>
         <view class="buttonBox" @click="mix_jumpUrl('/pages/join/joinIn', clubId)">
            <u-button text="立即加入社团" type="primary" shape="circle" size="small"></u-button>
         </view>
      </view>
   </view>
</template>

<script>
import { getClubInfo_API } from "@/service/api";
export default {
   data() {
      return {
         clubInfo: null,
         clubId: "",
      };
   },
   onLoad(params = {}) {
      const { clubId } = params;
      this.clubId = clubId;
      this.clubInfo = params;
      console.log(this.clubInfo);
      // this.getClubInfo(clubId);
   },
   methods: {
      getClubInfo(clubId) {
         // const info = getClubInfo_API({ clubId });
         // this.clubInfo = info;
         // console.log(this.clubInfo);

         this.clubInfo;
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   height: auto;
   padding-bottom: 150rpx;
   .bgimg {
      width: 100vw;
      height: 500rpx;
      background-color: #333;
      vertical-align: top;
   }
   .introduce {
      position: relative;

      .nameBox {
         width: 85vw;
         margin: auto;
         box-sizing: border-box;
         padding: 10px;
         position: relative;
         top: -20px;
         background: #ffffff;
         display: flex;
         align-items: flex-start;
         justify-content: space-between;
         .nameBox_left {
            flex: 1;
            > text {
               display: block;
            }
            .name {
               font-size: 17px;
               font-weight: 700;
            }
            .joinNum {
               font-size: 12px;
               color: rgba($color: #000000, $alpha: 0.75);
               text {
                  color: #000000;
                  font-size: 13px;
               }
            }
         }
         .nameBox_right {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            text {
               display: block;
               font-size: 12px;
               margin-left: 3px;
            }
         }
      }
      .subjection {
         display: block;
         width: 80vw;
         margin: 5px auto;
         text-align: left;
         color: #333333;
         font-size: 13px;
         > text {
            color: #202020;
         }
      }

      .columnTitle {
         width: 85vw;
         margin: 15px auto 5px;
         display: flex;
         align-items: center;
         justify-content: flex-start;
         .leftLine {
            width: 4px;
            height: 16px;
            border-radius: 2px;
            background-color: #b4d53c;
            margin-right: 5px;
         }
         text {
            font-size: 15px;
            font-weight: 700;
         }
      }
      .introduceText {
         display: block;
         width: 85vw;
         margin: auto;
         font-size: 14px;
      }
   }
   .bottomBox {
      width: 100vw;
      height: 125rpx;
      padding: 0 50rpx;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 999;
      background-color: #ffffff;
      .iconBox {
         flex-shrink: 0;
         margin: 0 20rpx;
         text {
            font-size: 25rpx;
            font-weight: 500;
         }
      }
      .buttonBox {
         flex: 1;
         box-sizing: border-box;
         padding: 0 30rpx;
      }
   }
}
</style>
