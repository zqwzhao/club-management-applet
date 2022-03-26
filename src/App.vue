<script>
export default {
   onLaunch: function () {
      console.log("App Launch");
   },
   onShow: function () {
      console.log("App Show");
   },
   onHide: function () {
      console.log("App Hide");
   },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";

.cardShadow {
   overflow: hidden;
   border-radius: 5px;
   box-shadow: 0 0 5px 0px #aaaaaa;
}
</style>
