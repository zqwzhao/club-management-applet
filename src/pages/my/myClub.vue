<template>
   <view class="mainBox">
      <view class="tabs">
         <u-tabs :current="current" :list="list" @click="handlerClick" :scrollable="false" :itemStyle="itemStyle"></u-tabs>
      </view>
      <u-list class="content" height="calc(100vh - 44px)">
         <u-list-item v-for="(item, index) in contentList" :key="index">
            <view class="clubItem">
               <image :src="item.clubLogo" mode="widthFix" />
               <view class="clubItem_info">
                  <view class="name">{{ item.clubName }}</view>
                  <view class="category">{{ item.category }}</view>
                  <view class="department">{{ item.department }}</view>
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
import { getJoinedClub_API, getAuditClub_API, getEndClub_API } from "@/service/api";

export default {
   data() {
      return {
         list: [{ name: "已加入" }, { name: "未审批" }, { name: "已拒绝" }],
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
      this.getList(this.current * 1);
   },
   methods: {
      handlerClick({ index }) {
         this.getList(index);
      },
      getList(index = 0) {
         const accountId = this.$store.state.userInfo.accountId;
         switch (index) {
            case 0:
               getJoinedClub_API({ accountId }).then(res => {
                  if (res.code === 0 || res.code === 200) {
                     this.contentList = res.data;
                  }
               });
               break;
            case 1:
               getAuditClub_API({ accountId }).then(res => {
                  if (res.code === 0 || res.code === 200) {
                     this.contentList = res.data;
                  }
               });
               break;
            case 2:
               getEndClub_API({ accountId }).then(res => {
                  if (res.code === 0 || res.code === 200) {
                     this.contentList = res.data;
                  }
               });
               break;
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

      text {
         text-align: center;
         opacity: 0.5;
         font-size: 14px;
      }
   }
}
</style>
