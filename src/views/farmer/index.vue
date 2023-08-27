<template>
  <div id="main">
    <!-- 设置布局 -->
    <div id="head">
      <div id="dzjy">
        <h3 class="title">乡村振兴数字化综合服务平台--闵宁镇</h3>
        <div><el-button type="info" round  @click="this.$router.push('/login')" style="margin-left: 1400px;margin-top: 17px;">退出</el-button></div>
      </div>
    </div>
    <el-container id="elcontainer">
      <el-header id="elheader">
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer')"
          ><span class="cul-wenzi">首页</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/buy')"
          ><span class="cul-wenzi">特色产品交易</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/cul')"
          ><span class="cul-wenzi">文化小镇</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/en')"
          ><span class="cul-wenzi">生态闵宁</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/parts')"
          ><span class="cul-wenzi">组织建设</span></el-button
        >
        <el-button
          type="text"
          class="nav-buy"
          @click="this.$router.push('/farmer/person')"
          ><span class="cul-wenzi">个人中心</span></el-button
        >
        <el-dropdown size:large>
          <el-button type="text" class="nav-buy" @click="showDropdown">
            <span class="cul-wenzi">关于</span>
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown >
            <el-dropdown-menu>
              <el-dropdown-item @click="goToGy"><a href="http://www.nxgy.gov.cn/zjgy/">走进小镇</a></el-dropdown-item>
              <el-dropdown-item @click="this.$router.push('/about')">关于我们</el-dropdown-item>
              <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 最新活动通知 -->
        <message />
        <br />
        <!--      轮播图-->
        <lunbo />
        <!-- 消息展示 -->
        <new_huodon />
        <!-- 网页底部信息 -->
        <Footer />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import lunbo from "@/views/farmer/HomeCom/lunbo.vue";
import message from "@/views/farmer/HomeCom/message.vue";
import new_huodon from "@/views/farmer/HomeCom/news.vue";
import Footer from "@/views/farmer/HomeCom/footer.vue";
export default {
  components: {
    lunbo,
    message,
    new_huodon,
    Footer,
  },
  method: {
    goToGy() {
      window.open('http://www.nxgy.gov.cn/zjgy/');
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
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
#elheader {
  text-align: center;
  background: #ffffff;
  height: 50px;
}
/* 设置标题的样式 */
.title {
  color: rgb(122, 94, 94);
  font-size: 22px;
  font-family: 宋体;
  padding-right: 10px;
  border-bottom: 2px solid #8a8282;
  margin-top:20px;
}
.el-button + .el-button {
  margin-left: 2px;
}

#dzjy {
  float: left;
  /* border-bottom: 2px solid #8a8282; */
  display: flex;
}
/* 解决父级元素的塌陷问题 */
#elcontainer {
  clear: both;
}

/* 最新活动样式 */
#new-hd {
  margin-top: 25px;
  font-family: 宋体;
}
/* "最新活动通知" */
#cul-zxhd {
  color: rgb(122, 94, 94);
  font-size: 22px;
  font-family: 宋体;
  text-align: left;
}
</style>