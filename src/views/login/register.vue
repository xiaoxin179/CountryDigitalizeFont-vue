<template>
  <div id="build-res">
    <div class="main-div">
      <el-card class="main-el">
        <h3 class="denglu">
          用户注册
          <el-button class="bt-re" @click="router.push('/login')">
            登录</el-button
          >
        </h3>
        <el-form
          :model="Form"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item>
            <el-input
              type="text"
              v-model="Form.username"
              autocomplete="off"
              placeholder="用户名"
              :prefix-icon="User"
              prop="username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="text"
              v-model="Form.email"
              autocomplete="off"
              placeholder="邮箱"
              :prefix-icon="ChatLineSquare"
              prop="email"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="Form.password"
              autocomplete="off"
              placeholder="密码"
              :prefix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="Form.checkPass"
              autocomplete="off"
              placeholder="确认密码"
              :prefix-icon="Check"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register" style="width: 100%"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { User, ChatLineSquare, Lock, Check } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import request from '../../utils/request'
const Form = reactive({});
const ruleForm = ref();
const router = useRouter();
const confirmPass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次确认密码"));
  }
  callback();
};
const confirmEmail = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("输入邮箱的格式不正确"));
  }
  callback();
};
// 校验器
const rules = reactive({
  username: [{ require: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ require: true, message: "请输入密码", trigger: "blur" }],
  checkPass: [{ validator: confirmPass, trigger: "blur" }],
  email: [{ validator: confirmEmail, trigger: "blur" }],
});
const register = () => {
  request.post('/register',Form).then((res)=>{
    console.log(res);
    if(res.code==='200'){
      ElMessage.success('注册成功，请用户登录!')
      router.push('/login')
    }
    else{
      ElMessage.error(res.msg)
    }
  })
};
</script>
<style scoped>
body,
html .main-el {
  width: 400px;
  height: 350px;
  top: 35%;
  left: 30%;
  margin-top: 50px; /*div高的一半*/
  margin-left: 50px; /*div宽的一半*/
  border-radius: 3%;
}
.bt-re {
  margin-left: 200px;
}
.main-div {
  margin-top: 300px;
  margin-left: 650px;
}
#build-res {
  background: url("@/assets/img/login_img/login.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>