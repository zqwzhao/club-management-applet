<template>
   <view class="mainBox">
      <view class="pageTop">
         <div class="classify">
            <text class="">{{ nowType }}</text>
            <div class="line"></div>
            <text class="">{{ nowInstitute }}</text>
         </div>
         <div class="search">
            <input class="input" @confirm="submit" @blur="handlerBulr" confirm-type="search" focus placeholder="输入你想找的社团" placeholder-style="font-size:30rpx;" />
         </div>
      </view>
      <view class="pageTopPlace"></view>
      <u-list @scrolltolower="scrolltolower">
         <u-list-item v-for="(item, index) in list" :key="index" @click="mix_jumpUrl('/pages/join/clubInfo', item)">
            <view class="clubItem">
               <image :src="item.clubLogo" mode="widthFix" />
               <view class="clubItem_info">
                  <view class="name">{{ item.clubName }}</view>
                  <view class="category">{{ item.category }}</view>
                  <view class="department">{{ item.department }}</view>
               </view>
               <view class="join">
                  <u-button type="primary" text="加入社团" size="mini"></u-button>
                  <text>
                     已加入
                     <text class="num">{{ item.joinNumber }}</text>
                     人
                  </text>
               </view>
            </view>
         </u-list-item>

         <u-list-item>
            <div class="bottom">
               <u-loading-icon v-if="loading" text="加载中" size="14" textSize="14"></u-loading-icon>
               <text v-else>没有更多了~</text>
            </div>
         </u-list-item>
      </u-list>
   </view>
</template>

<script>
import { getClubListAPI } from "@/service/api.js";
export default {
   data() {
      return {
         list: [],
         currPage: 1,
         totalPage: 10,
         loading: false,
         nowType: "社团分类",
         nowInstitute: "管理部门",
      };
   },
   created() {
      this.getClubList();
   },
   methods: {
      submit({ detail: { value } }) {
         if (value) {
            getClubListAPI({ value }).then(({ code, page }) => {
               if (code === 0 || code === 200) {
                  this.list = page.list;
                  this.currPage = page.currPage;
                  this.totalPage = page.totalPage;
               }
            });
         }
      },

      handlerBulr({ detail: { value } }) {
         if (!value) {
            console.log(1);
            this.getClubList();
         }
      },

      getClubList() {
         getClubListAPI().then(({ code, page }) => {
            if (code === 0 || code === 200) {
               this.list = page.list;
               this.currPage = page.currPage;
               this.totalPage = page.totalPage;
               console.log(this.list);
            }
         });
      },

      scrolltolower() {
         if (this.currPage != this.totalPage && !this.loading) {
            this.loading = true;
            this.currPage = ++this.currPage;
            getClubListAPI({ curPage: this.currPage })
               .then(({ code, page: { list, currPage, totalPage } }) => {
                  if (code === 0 || code === 200) {
                     this.totalPage = totalPage;

                     list.forEach(item => {
                        this.list.push(item);
                     });
                  }
                  this.loading = false;
               })
               .catch(() => {
                  this.loading = false;
               });
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;

   .pageTop {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #f8f8f8;
      z-index: 10;

      .classify {
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;

         text {
            display: block;
            width: 49%;
            height: 80rpx;
            text-align: center;
            line-height: 80rpx;
            font-size: 30rpx;
         }
         .line {
            height: 40rpx;
            width: 1px;
            background-color: #000000;
            opacity: 0.25;
         }
      }

      .search {
         width: 100vw;
         height: 70rpx;
         display: flex;
         align-items: center;
         justify-content: center;

         .input {
            width: 80vw;
            height: 40rpx;
            border-radius: 40rpx;
            border: 1px solid rgba($color: #000000, $alpha: 0.25);
            font-size: 30rpx;
            box-sizing: border-box;
            padding: 0 30rpx;
         }
      }
   }

   .pageTopPlace {
      width: 100vw;
      height: 150rpx;
   }

   .clubItem {
      padding: 5px 5vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      image {
         width: 160rpx;
         height: auto;
         flex-shrink: 0;
         margin-right: 10px;
      }
      .clubItem_info {
         flex: 1;
         align-self: stretch;
         .name {
            font-weight: 500;
            font-size: 14px;
            margin: 3px 0;
         }
         .category {
            font-size: 12px;
            color: #333333;
            margin: 1px 0;
         }
         .department {
            font-size: 12px;
            color: #333333;
            margin: 1xp 0;
         }
      }
      .join {
         flex-shrink: 0;
         text {
            font-size: 11px;
            color: #333333;
            .num {
               font-size: 12px;
               color: red;
               font-weight: 700;
            }
         }
      }
   }

   .bottom {
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
