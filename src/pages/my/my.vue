<template>
   <view class="mainBox">
      <view class="bg"><image src="../../static/image/bg.jpg" mode="aspectFill" /></view>
      <view class="userInfo">
         <view class="nullUser" v-if="!isLogin" @click="mix_jumpUrl('/pages/common/login')">
            <image src="../../static/image/nullUser.png" mode="widthFix" />
            <text>登录/注册</text>
         </view>
         <view class="isLogin" v-else @click="mix_jumpUrl('/pages/my/userInfo')">
            <view class="info">
               <image v-if="userInfo.picture" :src="userInfo.picture" mode="aspectFit" />
               <image v-else src="../../static/image/nullUser.png" mode="aspectFit" />
               <view>
                  <text class="name">{{ userInfo.nickname }}</text>
                  <text class="phone">{{ userInfo.mobile }}</text>
               </view>
            </view>
            <u-icon class="arr" name="arrow-right" size="24" color="#FFFFFF"></u-icon>
         </view>
      </view>
      <view class="myClub cardShadow">
         <view class="myClubTop">
            <text>我的社团</text>
         </view>
         <view class="myClubBody">
            <view class="item" v-for="(item, index) in clubTabList" :key="index" @click="jumpUrl('/pages/my/myClub', item)">
               <view class="img"><image :src="item.img" mode="widthFix" /></view>
               <text>{{ item.name }}</text>
            </view>
         </view>
      </view>
      <view class="myClub cardShadow">
         <view class="myClubTop">
            <text>我的活动</text>
         </view>
         <view class="myClubBody">
            <view class="item" v-for="(item, index) in activityTabList" :key="index" @click="jumpUrl('/pages/my/myActivity', item)">
               <view class="img"><image :src="item.img" mode="widthFix" /></view>
               <text>{{ item.name }}</text>
            </view>
         </view>
      </view>
      <view class="serve cardShadow">
         <view class="title">
            <text>我的服务</text>
         </view>
         <view class="serveList">
            <view class="item" @click="mix_jumpUrl('/pages/my/userInfo')">
               <image :src="require('@/static/image/people.svg')" mode="widthFix" />
               <text>我的信息</text>
            </view>
            <view v-if="isLogin" class="item" @click="exit">
               <image :src="require('@/static/image/logout.svg')" mode="widthFix" />
               <text>退出登录</text>
            </view>
         </view>
      </view>
   </view>
</template>

<script>
import { mapState } from "vuex";

export default {
   data() {
      return {
         src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
         userName: "登录/注册",
         isLogin: false,
         clubTabList: [
            { name: "已加入", index: 0, img: require("@/static/image/afferent.svg") },
            { name: "未审核", index: 1, img: require("@/static/image/audit.svg") },
            { name: "已拒绝", index: 2, img: require("@/static/image/abnormal.svg") },
         ],
         activityTabList: [
            { name: "已参加", index: 0, img: require("@/static/image/afferent.svg") },
            { name: "未审核", index: 1, img: require("@/static/image/audit.svg") },
            { name: "已结束", index: 2, img: require("@/static/image/abnormal.svg") },
         ],
      };
   },
   computed: {
      ...mapState({
         token: state => state.token,
         userInfo: state => state.userInfo,
      }),
   },
   onShow() {
      this.isLogin = Boolean(this.token) || false;
   },
   methods: {
      jumpUrl(url = "", obj = {}) {
         const token = this.$store.state.token;
         const userInfo = this.$store.state.userInfo;
         if (Boolean(token) && Boolean(userInfo)) {
            this.mix_jumpUrl(url, obj);
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
      exit() {
         uni.showModal({
            title: "提示",
            content: "退出登录？",
            success: ({ confirm }) => {
               if (confirm) {
                  uni.clearStorage();
                  uni.clearStorageSync();
                  this.isLogin = false;
               }
            },
         });
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   min-height: calc(100vh - 45px);
   .bg {
      width: 100vw;
      height: 500rpx;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      > image {
         width: 100%;
         height: 100%;
         vertical-align: top;
      }
   }
   .userInfo {
      width: 85vw;
      height: 200rpx;
      margin: 45px auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .nullUser {
         text {
            display: block;
            text-align: center;
            color: #ffffff;
            font-size: 14px;
         }
      }
      image {
         width: 75px;
         height: 75px;
         box-sizing: border-box;
         border-radius: 50%;
         background-color: #ffffff;
         display: block;
      }
      .isLogin {
         width: 100%;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         .info {
            display: flex;
            align-items: center;
            > view {
               align-self: stretch;
               margin-left: 10px;
               display: flex;
               flex-flow: column nowrap;
               align-items: flex-start;
               justify-content: space-evenly;
               text {
                  font-size: 14px;
                  color: #ffffff;
               }
            }
         }
      }
   }
   .myClub {
      width: 85vw;
      padding: 30rpx;
      margin: 0 auto 20px;
      background-color: #ffffff;
      .myClubTop {
         width: 100%;
         display: flex;
         align-items: flex-start;
         justify-content: space-between;
         > text {
            font-size: 16px;
            font-weight: 700;
            color: #000000;
         }
         > view {
            display: flex;
            align-items: flex-end;
            text {
               color: #333333;
            }
            .arr {
               display: inline-block;
            }
         }
      }
      .myClubBody {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-around;
         .item {
            width: 100rpx;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            .img {
               width: 80rpx;
               height: 80rpx;
               display: flex;
               align-items: center;
               justify-content: center;
               margin: 20rpx 0 10rpx 0;
               image {
                  width: 100%;
                  height: 100%;
               }
            }
            text {
               font-size: 14px;
               display: block;
               text-align: center;
            }
         }
      }
   }
   .serve {
      width: 85vw;
      padding: 30rpx;
      margin: auto;
      background-color: #ffffff;
      .title {
         width: 100%;
         display: flex;
         align-items: flex-start;
         justify-content: space-between;
         text {
            font-size: 16px;
            font-weight: 700;
         }
      }
      .serveList {
         width: 100%;
         margin: 10px 0;
         display: flex;
         align-items: center;
         justify-content: space-around;
         .item {
            min-width: 100rpx;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            image {
               width: 80rpx;
               height: 80rpx;
               vertical-align: top;
               margin-bottom: 10rpx;
            }
            text {
               font-size: 14px;
               display: block;
               text-align: center;
            }
         }
      }
   }
}
</style>
