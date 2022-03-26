<template>
   <view class="mainBox">
      <view class="tabs">
         <view class="c-tabs-group">
            <view class="c-tabs-group__title-box">
               <view class="c-tabs-group__title">
                  <text class="c-tabs-group__title-text" v-for="(item, index) in list" :key="index" @click="titleClick(item, index)" :style="'width:' + 100 / list.length">{{ item }}</text>
               </view>
               <view class="c-tabs-group__title-line" :style="'left:' + lineLeft + distance * tabIndex + 'px'"></view>
            </view>
         </view>
      </view>
      <swiper class="tabsContent" :current="tabIndex" @change="swiperChange">
         <swiper-item>
            <view class="emptyState" v-if="orderList.length === 0">
               <!-- <image src="~static/images/emptyImg.png" mode="widthFix" /> -->
            </view>
            <view v-else><list-card v-for="(item, index) in orderList" :key="index" :data="item"></list-card></view>
         </swiper-item>
         <swiper-item>
            <view class="emptyState" v-if="notPaid.length === 0">
               <!-- <image src="~static/images/emptyImg.png" mode="widthFix" /> -->
            </view>
            <view v-else><list-card v-for="(item, index) in notPaid" :key="index" :data="item"></list-card></view>
         </swiper-item>
         <swiper-item>
            <view class="emptyState" v-if="paid.length === 0">
               <!-- <image src="~static/images/emptyImg.png" mode="widthFix" /> -->
            </view>
            <view v-else><list-card v-for="(item, index) in paid" :key="index" :data="item"></list-card></view>
         </swiper-item>
         <swiper-item>
            <view class="emptyState" v-if="paid.length === 0">
               <!-- <image src="~static/images/emptyImg.png" mode="widthFix" /> -->
            </view>
            <view v-else><list-card v-for="(item, index) in paid" :key="index" :data="item"></list-card></view>
         </swiper-item>
         <swiper-item>
            <view class="emptyState" v-if="paid.length === 0">
               <!-- <image src="~static/images/emptyImg.png" mode="widthFix" /> -->
            </view>
            <view v-else><list-card v-for="(item, index) in paid" :key="index" :data="item"></list-card></view>
         </swiper-item>
      </swiper>
   </view>
</template>

<script>
export default {
   data() {
      return {
         list: ["全部", "已加入", "待审核", "已审核", "退出待审"],
         replace: "",
         lineLeft: 0,
         distance: 0,
         tabIndex: 1,
      };
   },
   onLoad(params) {
      const { index } = params;
      this.tabIndex = index;
   },
   methods: {
      swiperChange(index) {
         console.log(index);
      },
      titleClick(item, index) {
         console.log(item, index);
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-flow: column nowrap;
   align-items: inherit;
   justify-content: flex-start;
   .tabs {
      flex-shrink: 0;
   }
   .tabsContent {
      flex: 1;
      swiper-item {
         width: 100%;
         height: 100%;
         display: flex;
         flex-flow: column nowrap;
         align-items: center;
         justify-content: flex-start;
         overflow: auto;
      }
   }
}
.c-tabs-group {
   width: 100%;
   padding-bottom: 5px;
   // overflow: hidden;
   .c-tabs-group__title-box {
      width: 100%;
      position: relative;
      .c-tabs-group__title {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         text {
            padding: 10rpx 0;
            text-align: center;
            font-size: 35rpx;
            color: rgba($color: #000000, $alpha: 0.75);
         }
         .title__active {
            color: #000000;
         }
      }
      .c-tabs-group__title-line {
         width: 25px;
         height: 4px;
         border-radius: 4px;
         background-color: $u-success;
         position: absolute;
         z-index: 2021;
         left: 0;
         bottom: -2px;
         transform: translateX(-50%);
         transition: all 0.3s;
      }
   }
}
</style>
