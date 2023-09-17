<template>
  <div id="main">
    <!-- 设置布局 -->
    <div id="head"  style="display: flex;">
      <div id="dzjy">
        <h3 class="title">乡村振兴数字化综合服务平台--闵宁镇</h3>
      </div>
      <div style="flex:1;display: float;">
        <span style="float: right;margin: 25px 15px 15px 15px;font-weight: lighter;color: #ccc;">{{ store.user.name }}</span>
          <el-dropdown style="float:right;margin:15px">
            <el-avatar
                :src="store.user.avatar"
              />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
               
              </el-dropdown-menu>
            </template>
          </el-dropdown>
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
          @click="this.$router.push('/farmer/person?page=myInfo')"
          ><span class="cul-wenzi">个人中心</span></el-button
        >
        <el-dropdown size:large>
          <el-button type="text" class="nav-buy" @click="showDropdown">
            <span class="cul-wenzi">关于</span>
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goToGy"
                ><a href="http://www.nxgy.gov.cn/zjgy/"
                  >走进小镇</a
                ></el-dropdown-item
              >
              <el-dropdown-item @click="this.$router.push('/about')"
                >关于我们</el-dropdown-item
              >
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
<script setup>
import { ref } from "vue";
import lunbo from "@/views/farmer/HomeCom/lunbo.vue";
import message from "@/views/farmer/HomeCom/message.vue";
import new_huodon from "@/views/farmer/HomeCom/news.vue";
import Footer from "@/views/farmer/HomeCom/footer.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";
const store=useUserStore()

const router = useRouter();
const goToGy = () => {
  window.open("http://www.nxgy.gov.cn/zjgy/");
};

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
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
  margin-top: 20px;
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