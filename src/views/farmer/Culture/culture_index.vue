<template>
  <!--乡镇特色页面 -->
  <div id="main">
    <!-- 设置布局 -->
    <div id="head">
      <div id="whsq"><h3 class="title">不以山海为远，共筑美丽家园</h3></div>
    </div>
    <div id="hdsy">
      <el-button type="warning" @click="this.$router.push('/farmer')" plain
        >回到首页</el-button
      >
    </div>
    <div></div>
    <el-container id="elcontainer">
      <el-header id="elheader">
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul/tscol')"
          ><span class="cul-wenzi">乡镇特色</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul/activity')"
          ><span class="cul-wenzi">活动大厅</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul/chat')"
          ><span class="cul-wenzi">公共聊天室</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul/sence')"
          ><span class="cul-wenzi">乡村风景分享</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul/person')"
          ><span class="cul-wenzi">个人中心</span></el-button
        >
        
      </el-header>
      <el-main>
        <!-- 在这里设置路由的出口 -->
        <router-view></router-view>
        
        <Footer />
      </el-main>
      <!-- footer -->
    </el-container>
    <!-- 加上所属的组件 -->
    <!-- <buy_main/>
          <order/> -->
  </div>
</template>
  <script>
import Footer from "../HomeCom/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {};
  },
};
</script>
  <style scoped>
/* 设置回到首页的样式 */
#hdsy {
  float: right;
  margin-top: 20px;
}
#elheader {
  text-align: center;
  background: #ffffff;
  height: 50px;
  /* border-bottom:1px solid #8a6161; */
}
.nav-buy {
  color: #cdd0d6;
  width: 180px;
  height: 50px;
  font-size: 20px;
  font-family: 仿宋;
  font-weight: bolder;
  margin-right: 0px;
}
/* 设置文化社区样式 */
#whsq {
  float: left;
  color: rgb(122, 94, 94);
  font-size: 20px;
  font-family: 宋体;
  padding-right: 10px;
}
.title {
  color: rgb(122, 94, 94);
  font-size: 22px;
  font-family: 宋体;
  padding-right: 10px;
}
#head {
  display: inline-block;
}
#whsq {
  float: left;
}
</style>