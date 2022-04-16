<template>
   <view class="mainBox">
      <view class="pageTop">
         <view class="pageTopContent">
            <view class="classify">
               <view class="button">
                  <text @click="showTypePopup(true)">{{ form.clubType }}</text>
                  <view class="line"></view>
                  <text @click="showInstitutePopup(true)">{{ form.clubInstitute }}</text>
               </view>
               <view class="typePopup" :style="typePopupStyle">
                  <text v-for="(item, index) in typeList" :key="index" :class="item.class" @click="typeItemClick(item)">{{ item.label }}</text>
               </view>
               <view class="institutePopup" :style="institutePopupStyle">
                  <text v-for="(item, index) in instituteList" :key="index" :class="item.class" @click="instituteItemClick(item)">{{ item.label }}</text>
               </view>
            </view>

            <div class="search">
               <input class="input" @confirm="submit" @blur="handlerBulr" confirm-type="search" focus placeholder="输入你想找的社团" placeholder-style="font-size:30rpx;" />
            </div>
         </view>
      </view>
      <scroll-view ref="clubScroll" class="clubList" scroll-y="true" @scrolltolower="scrolltolower">
         <view class="clubItem" v-for="(item, index) in list" :key="index">
            <image :src="item.clubLogo" mode="widthFix" />
            <view class="clubItem_info">
               <view class="name">{{ item.clubName }}</view>
               <view class="category">分类：{{ item.clubType }}</view>
               <view class="department">部门：{{ item.clubInstitute }}</view>
            </view>
            <view class="join">
               <u-button type="primary" text="加入社团" size="mini" @click="mix_jumpUrl('/pages/join/clubInfo', item)"></u-button>
            </view>
         </view>
         <view class="load">
            <u-loading-icon v-if="loading" size="18" text="加载中" textSize="16"></u-loading-icon>
            <text v-else>没有更多了</text>
         </view>
      </scroll-view>
   </view>
</template>

<script>
import { getClubListAPI, getTypeAndInstitute_API } from "@/service/api.js";

export default {
   data() {
      return {
         list: [],
         loading: false,
         typeList: [],
         instituteList: [],
         showTypeList: false,
         showInstituteList: false,
         typePopupStyle: "",
         institutePopupStyle: "",
         form: {
            clubName: "",
            page: 1,
            clubType: "社团分类",
            clubInstitute: "管理部门",
         },
         totalPage: 10,
      };
   },
   onShow() {
      this.getTypeAndInstitute();
   },
   created() {
      this.getClubList();
   },
   methods: {
      submit({ detail: { value } }) {
         if (value) {
            this.form.clubName = value;
            this.getClubList();
         } else {
            this.form.clubName = "";
            this.getClubList();
         }
      },

      handlerBulr({ detail: { value } }) {
         if (value.length === 0) {
            this.getClubList();
         }
      },

      getClubList(type = false) {
         this.loading = true;
         if (!type) this.form.page = 1;
         let sendData = { ...this.form };
         if (sendData.clubType === "社团分类") sendData.clubType = "";
         if (sendData.clubInstitute === "管理部门") sendData.clubInstitute = "";

         getClubListAPI(sendData)
            .then(({ code, page }) => {
               if (code === 0 || code === 200) {
                  if (type) {
                     this.list.push(...page.list);
                  } else {
                     this.list = page.list;
                  }
                  this.totalPage = page.totalPage;
               }
               this.loading = false;
            })
            .catch(() => {
               this.loading = false;
            });
      },

      scrolltolower() {
         if (this.form.page < this.totalPage && !this.loading) {
            this.form.page = ++this.form.page;
            this.getClubList(true);
         }
      },

      async getTypeAndInstitute() {
         const res = await getTypeAndInstitute_API();
         if (res.code === 0 || res.code === 200) {
            this.typeList = res.clubTypes.map(item => {
               return {
                  label: item,
                  class: "",
               };
            });
            this.instituteList = res.clubInstitutes.map(item => {
               return {
                  label: item,
                  class: "",
               };
            });
         }
      },

      showTypePopup(type = false) {
         if (this.showInstituteList) this.showInstitutePopup(true);
         if (this.showTypeList) {
            this.showTypeList = false;
            this.typePopupStyle = "";
            if (type) {
               this.form.clubType = "社团分类";
               this.getClubList();
            }
         } else {
            this.showTypeList = true;
            this.typePopupStyle = "transform: translate(0, 100%);box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);";
            this.typeList.forEach(item => {
               if (item.label === this.clubType) {
                  item.class = "on";
               } else {
                  item.class = "";
               }
            });
            this.form.clubType = "全部社团";
         }
      },

      typeItemClick(item = {}) {
         this.form.clubType = item.label;
         this.showTypePopup(false);
         this.getClubList();
      },

      showInstitutePopup(type) {
         if (this.showTypeList) this.showTypePopup(true);
         if (this.showInstituteList) {
            this.showInstituteList = false;
            this.institutePopupStyle = "";
            if (type) {
               this.form.clubInstitute = "管理部门";
               this.getClubList();
            }
         } else {
            this.showInstituteList = true;
            this.institutePopupStyle = "transform: translate(0, 100%);box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);";
            this.instituteList.forEach(item => {
               if (item.label === this.clubInstitute) {
                  item.class = "on";
               } else {
                  item.class = "";
               }
            });
            this.form.clubInstitute = "全部部门";
         }
      },

      instituteItemClick(item = {}) {
         this.form.clubInstitute = item.label;
         this.showInstitutePopup(false);
         this.getClubList();
      },
   },
};
</script>

<style lang="scss" scoped>
.mainBox {
   width: 100vw;

   .pageTop {
      width: 100%;
      height: 150rpx;
      .pageTopContent {
         position: fixed;
         top: 0;
         left: 0;
         background-color: #f8f8f8;
         z-index: 10;
         .classify {
            width: 100%;
            position: relative;
            z-index: 10;
            .button {
               position: relative;
               z-index: 10;
               background-color: #f8f8f8;
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

            .typePopup,
            .institutePopup {
               width: 100vw;
               height: auto;
               position: absolute;
               z-index: 2;
               bottom: 0;
               left: 0;
               transform: translate(0, 0);
               transition: all 0.3s;
               background-color: #f8f8f8;
               flex-flow: row wrap;
               box-sizing: border-box;
               padding: 2vw;
               border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
               text {
                  display: block;
                  padding: 10rpx 15rpx;
                  margin: 10rpx 15rpx;
                  border: 1px solid #3c9cff;
                  float: left;
                  border-radius: 5px;
                  font-size: 25rpx;
               }
               .on {
                  background-color: #3c9cff;
                  color: #ffffff;
               }
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
   }

   .clubList {
      height: calc(100vh - 150rpx);
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
}
</style>
