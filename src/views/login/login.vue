<template>
  <div id="building">
    <div class="el-main">
      <el-card class="login">
        <h3 class="denglu">
          用户登录
          <el-button class="bt-re" @click="router.push('/register')">
            注册</el-button
          >
        </h3>
        <el-form
          ref="ruleFormRef"
          :model="loginForm"
          class="login-card"
          :rules="rules"
        >
          <el-form-item>
            <el-input
              type="text"
              v-model="loginForm.username"
              placeholder="账号:"
              style="width: 100%"
              prop="username"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="密码:"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              prop="password"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="login" style="width: 100%"
              >立 即 登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import request from "@/utils/request";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";
import { User, Lock } from "@element-plus/icons-vue";
// 因为登录信息是一个对象，所以需要使用，reactive都是需要创建出一个空的对象，所以在括号里面不可以没有大括号
const loginForm = reactive({});
const router = useRouter();
const store = useUserStore();
// 表单校验规则√
const rules = reactive({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const ruleFormRef = ref();
// 登录方法√
const login = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      request.post("/login", loginForm).then((res) => {
        if (res.code === "200") {
          if (res.data.isDelete === 0) {
            ElMessage.error("账号被冻结，您无法登录");
          } else {
            ElMessage.success("登录成功");
            store.setUser(res.data); //数据持久化存储，user对象存储到浏览器
            router.push("/");
          }
        } else {
          ElMessage.error(res.msg);
        }
      });
    }
  });
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
.el-main {
  margin-top: 300px;
  margin-left: 650px;
}
#building {
  background: url("@/assets/img/login_img/login.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>