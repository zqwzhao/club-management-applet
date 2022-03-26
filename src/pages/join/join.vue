<template>
   <view class="mainBox">
      <view class="search"></view>
      <view class="clubUl">
         <view class="clubItem" v-for="(item, index) in list" :key="index" @click="mix_jumpUrl('/pages/join/clubInfo', item)">
            <image src="" mode="widthFix" />
            <view class="clubItem_info">
               <view class="name">{{ item.name }}</view>
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
      </view>
   </view>
</template>

<script>
import { getClubListAPI } from "@/service/api.js";
export default {
   data() {
      return {
         list: [],
      };
   },
   created() {
      this.getClubList();
   },
   methods: {
      async getClubList() {
         const list = getClubListAPI();
         // const { code, body } = getClubListAPI();
         this.list = list;
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;
   .clubUl {
      width: 100vw;
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
   }
}
</style>
