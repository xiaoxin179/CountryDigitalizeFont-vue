<template>
    <div id="building">
      <div class="el-main">
      <el-card class="login">
        <h3 class="denglu">
          用户登录
          <el-button class="bt-re" @click="toRegister()"> 注册</el-button>
        </h3>
        <el-form :model="form" class="login-card">
          <el-form-item>
            <el-input
              type="text"
              v-model="loginForm.name"
              placeholder="账号:"
              style="width: 100%"
              prop="name"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="密码:"
              v-model="loginForm.password"
              prop="password"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="Login" style="width: 100%"
              >立 即 登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    </div>
</template>
<script >
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },
    };
  },
  components: {
    Icon,
  },
  methods: {
    Login() {
      // 发送ajax请求
      this.$axios
        .post("http://localhost:9090/sys-user/login", this.loginForm)
        .then((resp) => {
          let data = resp.data;
          if (data.success) {
            this.loginForm = {};
            this.$message({
              message: "欢迎登录乡村振兴数字化综合服务平台!!!",
              type: "success",
            });
            this.$router.push({ path: "/farmer" });
          }
        });
        // 测试git
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>


.login {
  width: 400px;
  height: 250px;
  border-top: 400px;
  border-radius: 3%;
  
}
.denglu {
  line-height: 20px;
}
.login-card {
  margin-top: 9px;
}
.bt-re {
  margin-left: 200px;
}
.el-main{
  margin-top:300px;
  margin-left: 650px;
}
#building{
  background:url("@/assets/img/login_img/login.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
</style>