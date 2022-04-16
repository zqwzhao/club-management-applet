<template>
   <view class="mainBox">
      <scroll-view class="newsList" scroll-y="true" @scrolltolower="scrolltolower">
         <div class="newsItem" v-for="(item, index) in newsList" :key="index">
            <image :src="item.activityImage" mode="widthFix" />
            <view class="itemInfo">
               <text class="title">{{ item.activityName }}</text>
               <text class="summary">{{ item.activityDescribe }}</text>
            </view>
            <view class="join">
               <u-button type="primary" text="查看活动" size="mini" @click="mix_jumpUrl('/pages/activity/activityInfo', item)"></u-button>
            </view>
         </div>
         <view class="load">
            <u-loading-icon v-if="loading" size="18" text="加载中" textSize="16"></u-loading-icon>
            <text v-else>没有更多了</text>
         </view>
      </scroll-view>
   </view>
</template>

<script>
import { getNewsListAPI } from "@/service/api";
export default {
   data() {
      return {
         newsList: [],
         currPage: 1,
         totalPage: 10,
         loading: false,
      };
   },
   watch: {
      currPage: {
         handler(val) {
            if (val === this.totalPage) {
            }
         },
         immediate: true,
      },
   },
   created() {
      this.getNewsList();
   },
   methods: {
      getNewsList() {
         getNewsListAPI().then(({ code, page: { list, currPage, totalPage } }) => {
            if (code === 0 || code === 200) {
               this.newsList = list;
               this.currPage = currPage;
               this.totalPage = totalPage;
            }
         });
      },

      scrolltolower() {
         if (this.currPage != this.totalPage && !this.loading) {
            this.loading = true;
            this.currPage = ++this.currPage;
            getNewsListAPI().then(({ code, page: { list, totalPage } }) => {
               if (code === 0 || code === 200) {
                  this.totalPage = totalPage;

                  list.forEach(item => {
                     this.newsList.push(item);
                  });
                  this.loading = false;
               }
            });
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   box-sizing: border-box;

   .newsList {
      width: 100vw;
      height: 100vh;
      .newsItem {
         width: 100%;
         margin: auto;
         box-sizing: border-box;
         padding: 20rpx 6vw;
         border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
         display: flex;
         align-items: center;
         justify-content: space-between;
         image {
            width: 160rpx;
            height: 100rpx;
            vertical-align: top;
            flex-shrink: 0;
            margin-right: 7px;
         }
         .itemInfo {
            flex: 1;
            .title {
               display: block;
               max-width: 100%;
               font-size: 28rpx;
               font-weight: 600;
               overflow: hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
            }
            .summary {
               max-width: 100%;
               font-size: 26rpx;
               color: #333333;
               overflow: hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
               opacity: 0.75;
            }
         }
      }
   }

   .load {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 50px;

      text {
         opacity: 0.5;
         font-size: 14px;
      }
   }
}
</style>
