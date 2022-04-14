<template>
   <view class="mainBox">
      <view class="tabs">
         <u-tabs :current="current" :list="list" @click="handlerClick" :scrollable="false" :itemStyle="itemStyle"></u-tabs>
      </view>
      <u-list class="content" height="calc(100vh - 44px)">
         <u-list-item v-for="(item, index) in contentList" :key="index">
            <view class="newsItem">
               <image :src="item.img" mode="widthFix" />
               <view class="itemInfo">
                  <text class="title">{{ item.activityName }}</text>
                  <text class="summary">{{ item.activityDescribe }}</text>
               </view>
            </view>
         </u-list-item>

         <u-list-item>
            <view class="bottom">
               <u-loading-icon v-if="loading" text="加载中" size="14" textSize="14"></u-loading-icon>
               <text v-else>没有更多了~</text>
            </view>
         </u-list-item>
      </u-list>
   </view>
</template>

<script>
import { getJoinedActivity_API, getAuditActivity_API, getEndActivity_API } from "@/service/api";

export default {
   data() {
      return {
         list: [{ name: "已加入" }, { name: "未审批" }, { name: "已结束" }],
         contentList: [],
         itemStyle: {
            width: "33.33%",
            height: "44px",
            "box-sizing": "border-box",
         },
         current: 0,
      };
   },
   onLoad(params) {
      this.current = params.index;
      this.getList(this.current);
   },

   methods: {
      handlerClick({ index }) {
         this.getList(index);
      },
      getList(index = 0) {
         var method = () => {};
         switch (index) {
            case 0:
               method = getJoinedActivity_API;
               break;
            case 1:
               method = getAuditActivity_API;
               break;
            case 2:
               method = getEndActivity_API;
               break;
         }
         const accountId = this.$store.state.userInfo.accountId;
         const res = method({ accountId });
         if (res.code === 0 || res.code === 200) {
            this.contentList = res.list;
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;
   .tabs {
      width: 100vw;
      flex-shrink: 0;
   }
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

   .bottom {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;

      text {
         text-align: center;
         opacity: 0.5;
         font-size: 14px;
      }
   }
}
</style>
