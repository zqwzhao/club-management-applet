<template>
   <view class="mainBox">
      <view class="bg"><image src="../../static/image/bg.jpg" mode="aspectFill" /></view>
      <view class="userInfo">
         <view class="nullUser" v-if="!isLogin">
            <image src="../../static/image/nullUser.png" mode="widthFix" />
            <text>登录/注册</text>
         </view>
         <view class="isLogin" v-else @click="mix_jumpUrl('/pages/my/userInfo')">
            <view class="info">
               <image :src="userInfo.avatar" mode="aspectFit" />
               <view>
                  <text class="name">{{ userInfo.name }}</text>
                  <text class="phone">{{ userInfo.phone }}</text>
               </view>
            </view>
            <u-icon class="arr" name="arrow-right" size="24" color="#FFFFFF"></u-icon>
         </view>
      </view>
      <view class="myClub cardShadow">
         <view class="myClubTop">
            <text>我的社团</text>
            <view @click="mix_jumpUrl('/pages/my/myClub', { index: 1 })">
               <text>全部社团</text>
               <view class="arr"><u-icon class="arr" name="arrow-right" size="18" color="#333333"></u-icon></view>
            </view>
         </view>
         <view class="myClubBody">
            <view class="item" v-for="(item, index) in clubTabList" :key="index">
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
            <view class="item">
               <image src="" mode="widthFix" />
               <text>我的信息</text>
            </view>
            <view v-if="isLogin" class="item">
               <image src="" mode="widthFix" />
               <text>推出系统</text>
            </view>
         </view>
      </view>
   </view>
</template>

<script lang="ts">
export default {
   data() {
      return {
         src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
         userName: "登录/注册",
         userInfo: {
            name: "111",
            phone: "155563596547",
            avatar: "",
         },
         isLogin: true,
         clubTabList: [
            { name: "已加入", img: "" },
            { name: "待审核", img: "" },
            { name: "已拒绝", img: "" },
         ],
      };
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
            .img {
               width: 100rpx;
               height: 100rpx;
               display: flex;
               align-items: center;
               justify-content: center;
               border-radius: 50%;
               overflow: hidden;
               margin: 10px 0;
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
            image {
               width: 100rpx;
               height: 100rpx;
               vertical-align: top;
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
