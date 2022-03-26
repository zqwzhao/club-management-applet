<template>
   <view class="mainBox">
      <view class="newsItem" v-for="(item, index) in newsList" :key="index">
         <image :src="item.img" mode="widthFix" />
         <view>
            <text class="title">{{ item.title }}</text>
            <text class="summary">{{ item.summary }}</text>
         </view>
      </view>
   </view>
</template>

<script lang="ts">
export default {
   data() {
      return {
         newsList: [
            { img: "https://cdn.uviewui.com/uview/swiper/swiper3.png", title: "第一条活动标题，劲才精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！最多两行内容，轻微加粗", summary: "简介简洁简介内容，这是简介的内容，更小略带透明的字体，超过长度显示为省略号，一个有点长的简介" },
            { img: "https://cdn.uviewui.com/uview/swiper/swiper3.png", title: "第二条活动标题，劲才精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！最多两行内容，轻微加粗", summary: "简介简洁简介内容，这是简介的内容，更小略带透明的字体，超过长度显示为省略号，一个有点长的简介" },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   box-sizing: border-box;
   .newsItem {
      width: 100%;
      height: 180rpx;
      margin: auto;
      box-sizing: border-box;
      padding: 5px 6vw;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
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
</style>
