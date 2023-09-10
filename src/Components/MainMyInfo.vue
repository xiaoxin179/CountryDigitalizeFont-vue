<template>
  <el-form style="width: 600px" :model="user">
    <el-form-item>
      <el-upload
        class="avatar-uploader"
        :action="url"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        style="margin: 20px; margin-left: 50px"
      >
        <img v-if="user.avatar" :src="user.avatar" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item label="用户名:"
      ><el-input v-model="user.username" disabled></el-input
    ></el-form-item>
    <el-form-item label="姓名："
      ><el-input v-model="user.name" :disabled="isUpdate === 0"></el-input
    ></el-form-item>
    <el-form-item label="邮 箱："
      ><el-input v-model="user.email" :disabled="isUpdate === 0"></el-input
    ></el-form-item>
    <el-form-item label="地 址："
      ><el-input v-model="user.address" :disabled="isUpdate === 0"></el-input
    ></el-form-item>
  </el-form>
  <div style="margin-left: 30px">
    <el-button type="primary" style="margin-right: 450px" @click="update"
      >修改</el-button
    >
    <el-button type="success" @click="save">保存</el-button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import lunbo from "@/views/farmer/HomeCom/lunbo.vue";
import message from "@/views/farmer/HomeCom/message.vue";
import new_huodon from "@/views/farmer/HomeCom/news.vue";
import Footer from "@/views/farmer/HomeCom/footer.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import request from "../utils/request";
import {
  Setting,
  ChatDotRound,
  Histogram,
  Plus,
  User,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import config from "../../configs";
const user = reactive({});
const store = useUserStore();
const leader = () => {
  request.get("/user/" + store.user.id).then((res) => {
    Object.assign(user, res.data);
  });
};
leader();
const isUpdate = ref(0);
const update = () => {
  isUpdate.value = 1;
};
const oldNew = ref(0);
const younfNew = ref();
const oldPhoto = ref(0);
const newPhoto = ref();
// 这个url的值就是用来绑定文件上传的接口
const url = ref("http://" + config.serverUrl + "/file/upload");
const handleAvatarSuccess = (res) => {
  if (res.code === "200") {
    user.avatar = res.data + "?loginId=" + store.getUser.userid;
    oldPhoto.value = 1;
    ElMessage.success("用户头像上传成功！");
  } else {
    ElMessage.error("用户头像上传失败！");
  }
};
const save = () => {
  younfNew.value = isUpdate.value;
  isUpdate.value = 0;
  if (oldNew.value !== younfNew.value || oldPhoto.value == 1) {
    request.put("/user", user).then((res) => {
      Object.assign(user, res.data);
      store.setUser(user);
    });
    ElMessage.success("用户信息更新成功!");
  }
};

</script>
<style  scoped>
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
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 50%;
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
