<template>
   <view class="mainBox">
      <image class="bgimg" :src="clubInfo.clubLogo" mode="aspectFill" />
      <view class="introduce">
         <view class="nameBox cardShadow">
            <view class="nameBox_left">
               <text class="name">{{ clubInfo.clubName }}</text>
               <text class="joinNum">
                  社团QQ群：
                  <text user-select="true">{{ clubInfo.clubQq }}</text>
               </text>
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
         <view class="buttonBox" @click="joinClub">
            <u-button text="立即加入社团" type="primary" shape="circle" size="small"></u-button>
         </view>
      </view>
      <u-notify ref="uNotify"></u-notify>
   </view>
</template>

<script>
import { getClubInfo_API, joinInClub_API } from "@/service/api";
export default {
   data() {
      return {
         clubInfo: {},
         clubId: "",
      };
   },
   onLoad(params = {}) {
      const { clubId } = params;
      this.clubId = clubId;
      this.getClubInfo(clubId);
   },
   methods: {
      getClubInfo(clubId) {
         getClubInfo_API(clubId).then(res => {
            const { code, club } = res;
            if (code === 0 || code === 200) {
               this.clubInfo = club;
               console.log(this.clubInfo);
            }
         });
      },

      joinClub() {
         const token = this.$store.state.token;
         if (token) {
            uni.showModal({
               title: "提示",
               content: "确认加入当前社团？",
               success: ({ confirm }) => {
                  if (confirm) {
                     joinInClub_API({
                        accountId: this.$store.state.userInfo.accountId,
                        clubId: this.clubId,
                     }).then(({ code }) => {
                        if (code === 0 || code === 200) {
                           this.$refs.uNotify.show({
                              type: "primary",
                              message: "申请成功，前往我的页面查看审核状态",
                              duration: 1000 * 3,
                              fontSize: 16,
                           });
                        }
                     });
                  }
               },
            });
         } else {
            uni.showModal({
               title: "提示",
               content: "尚未登录，是否登录？",
               success: ({ confirm }) => {
                  if (confirm) this.mix_jumpUrl("/pages/common/login");
               },
            });
         }
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
