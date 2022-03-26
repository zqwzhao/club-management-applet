<template>
   <view class="mainBox">
      <u-swiper :list="swiperList" previousMargin="30" nextMargin="30" circular radius="5" bgColor="#ffffff" indicator indicatorMode="dot" height="150"></u-swiper>
      <!-- column -->
      <view class="columnTitle" enable-flex="true">
         <view class="label">
            <view class="leftLine"></view>
            <text>社团推荐</text>
         </view>
         <view class="more" @click="mix_jumpUrl('/pages/join/join')">
            <text>更多</text>
            <view class="arr">
               <u-icon name="arrow-right" size="14" color="#333333"></u-icon>
            </view>
         </view>
      </view>

      <view class="hotClub">
         <u-scroll-list :indicator="false">
            <view class="scrollList">
               <view class="scrollListItem" v-for="(item, index) in scrollList" :key="index" @click="mix_jumpUrl('/pages/join/clubInfo', item)">
                  <image mode="widthFix" :src="item.img"></image>
                  <view class="easyInfo">
                     <text class="name">{{ item.name }}</text>
                     <view class="number">
                        <view class="number_left">
                           <u-icon name="checkmark-circle" color="#333333" size="12"></u-icon>
                           <text>{{ item.joinNumber }}</text>
                        </view>
                        <view class="number_right">
                           <u-icon name="eye" color="#333333" size="12"></u-icon>
                           <text>{{ item.watchNum }}</text>
                        </view>
                     </view>
                  </view>
               </view>
            </view>
         </u-scroll-list>
      </view>

      <view class="columnTitle">
         <view class="label">
            <view class="leftLine"></view>
            <text>社团活动</text>
         </view>
         <view class="more">
            <text>更多</text>
            <view class="arr">
               <u-icon name="arrow-right" size="14" color="#333333"></u-icon>
            </view>
         </view>
      </view>

      <u-line color="#eeeeee" />

      <view class="newActivity">
         <view class="newsItem" v-for="(item, index) in newsList" :key="index">
            <image :src="item.img" mode="widthFix" />
            <view>
               <text class="title">{{ item.title }}</text>
               <text class="summary">{{ item.summary }}</text>
            </view>
         </view>
      </view>
   </view>
</template>

<script>
import { getSwiperListAPI, getNewsListAPI, getClubListAPI } from "@/service/api";
export default {
   data() {
      return {
         swiperList: [],
         scrollList: [],
         newsList: [],
      };
   },
   created() {
      this.getSwiperList();
      this.getClubList();
      this.getNewsList();
   },
   methods: {
      async getSwiperList() {
         this.swiperList = getSwiperListAPI();
      },

      async getNewsList() {
         this.newsList = getNewsListAPI();
      },

      async getClubList() {
         this.scrollList = getClubListAPI();
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;

   .columnTitle {
      width: 85vw;
      margin: 15px auto 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .label {
         display: flex;
         align-items: center;
         justify-content: center;
         .leftLine {
            width: 4px;
            height: 16px;
            border-radius: 2px;
            background-color: #3c94d5;
            margin-right: 5px;
         }
         text {
            font-size: 15px;
            font-weight: 700;
         }
      }
      .more {
         display: flex;
         align-items: center;
         justify-content: center;
         text {
            font-size: 13px;
            color: #333333;
         }
      }
   }

   .hotClub {
      width: 100vw;
      margin: auto;
      .scrollList {
         display: flex;
         align-items: flex-start;
         justify-content: space-between;

         .scrollListItem {
            margin: 5px;
            width: 190rpx;
            height: 260rpx;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: space-between;
            border-radius: 3px;
            border: 1px solid rgba($color: #000000, $alpha: 0.1);
            overflow: hidden;
            &:first-of-type {
               margin: 5px 5px 5px 7.5vw;
            }
            &:last-of-type {
               margin: 5px 7.5vw 5px 5px;
            }
            image {
               width: 100%;
               vertical-align: top;
            }
            .easyInfo {
               width: 100%;
               .name {
                  display: block;
                  text-align: center;
                  font-size: 30rpx;
                  font-weight: 600;
                  margin: 10rpx 0;
                  width: inherit;
                  overflow: hidden;
               }
               .number {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 100%;
                  padding: 0 10rpx 5rpx 10rpx;
                  box-sizing: border-box;
                  > view {
                     display: flex;
                     align-items: center;
                     justify-content: center;

                     text {
                        font-size: 25rpx;
                        color: rgba($color: #000000, $alpha: 0.4);
                        display: block;
                        margin-left: 5rpx;
                     }
                  }
               }
            }
         }
      }
   }
   .newActivity {
      width: 85vw;
      margin: auto;
      .newsItem {
         width: 100%;
         height: 180rpx;
         margin: 5px;
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      image {
         width: 160rpx;
         vertical-align: top;
         flex-shrink: 0;
         margin-right: 7px;
      }
      > view {
         flex: 1;
         .title {
            max-width: 100%;
            font-size: 14px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
         }
         .summary {
            max-width: 100%;
            font-size: 12px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
         }
      }
   }
}
</style>
