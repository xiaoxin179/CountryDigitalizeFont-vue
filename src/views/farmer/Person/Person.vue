<template>
  <div id="main">
    <!-- 设置布局 -->
    <div id="head">
      <div id="dzjy">
        <h3 class="title">乡村振兴数字化综合服务平台--闵宁镇</h3>
        <div>
          <el-button
            type="info"
            round
            @click="logout"
            style="margin-left: 1400px; margin-top: 17px"
            >退出</el-button
          >
        </div>
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
        <div
          style="
            display: flex;
            margin: 0 340px 0 340px;
            background-color: rgb(255, 255, 255);
          "
        >
          <div
            class="side"
            style="
              width: 200px;
              height: 50vh;
              border: 1px solid #ccc;
              border-radius: 10px;
              margin-right: 10px;
            "
          >
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              style="margin-top: 100px"
            >
              <el-menu-item index="1">
                <el-icon><setting /></el-icon>
                <span>个人资料</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><ChatDotRound /></el-icon>
                <span>消息通知</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><Histogram /></el-icon>
                <span>博文管理</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div style="flex: 1; border: 1px solid #ccc; border-radius: 10px">
            <el-form style=" width: 600px" :model="user">
              <el-form-item>
                <el-upload
                  class="avatar-uploader"
                  :action="url"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  style="margin: 20px ;margin-left:50px"
                >
                  <img v-if="user.avatar" :src="user.avatar" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="用户名:"
                ><el-input
                  v-model="user.username"
                  :disabled="isUpdate === 0"
                ></el-input
              ></el-form-item>
              <el-form-item label="姓   名:"
                ><el-input
                  v-model="user.name"
                  :disabled="isUpdate === 0"
                ></el-input
              ></el-form-item>
              <el-form-item label="邮 箱:"
                ><el-input
                  v-model="user.email"
                  :disabled="isUpdate === 0"
                ></el-input
              ></el-form-item>
              <el-form-item label="地 址:"
                ><el-input
                  v-model="user.address"
                  :disabled="isUpdate === 0"
                ></el-input
              ></el-form-item>
            </el-form>
            <div style="margin-left: 30px">
              <el-button
                type="primary"
                style="margin-right: 450px"
                @click="update"
                >修改</el-button
              >
              <el-button type="success" @click="save">保存</el-button>
            </div>
          </div>
        </div>
        <!-- 网页底部信息 -->
        <Footer />
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import lunbo from "@/views/farmer/HomeCom/lunbo.vue";
import message from "@/views/farmer/HomeCom/message.vue";
import new_huodon from "@/views/farmer/HomeCom/news.vue";
import Footer from "@/views/farmer/HomeCom/footer.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../stores/user";
import request from "../../../utils/request";
import { Setting, ChatDotRound, Histogram,Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import config from '../../../../configs';
// 退出登录函数
const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};
const user = reactive({});
const store = useUserStore();
// 加载用户数据函数
const leader = () => {
  request.get("/user/" + store.user.id).then((res) => {
    Object.assign(user, res.data);
  });
};
leader();
// 点击修改用户数据
const isUpdate = ref(0);
const update = () => {
  isUpdate.value = 1;
  console.log(isUpdate.value);
};
const oldNew = ref(0);
const younfNew = ref();
const save = () => {
  younfNew.value = isUpdate.value;
  isUpdate.value = 0;
  if (oldNew.value !== younfNew.value) {
    ElMessage.success("保存成功!");
  }
};
const url=ref(config.serverUrl+"/file/upload")
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
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>