<template>
  <div id="build-res">
    <div class="main-div">
      <el-card class="main-el">
        <h3 class="denglu">
          用户注册
          <el-button class="bt-re" @click="toLogin()"> 登录</el-button>
        </h3>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item>
            <el-input
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
              placeholder="用户名"
              prefix-icon
              prop="name"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="text"
              v-model="ruleForm.phone"
              autocomplete="off"
              placeholder="电话"
              prop="phone"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              placeholder="确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              style="width: 48%"
              >注册</el-button
            >
            <el-button @click="resetForm('ruleForm')" style="width: 48%"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        password: "",
        name: "",
        checkPass: "",
        age: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$axios
        .post("http://localhost:9090/sys-user/register", this.ruleForm)
        .then((resp) => {
          console.log(resp);
          let data = resp.data;
          console.log(data);
          if (data.success) {
            this.ruleForm = {};
            this.$message({
              message: "恭喜你,注册成功,点击去登陆按钮进行登陆吧!!!",
              type: "success",
            });
            this.$router.push({ path: "/login" });
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
  components: {
    Icon,
  },
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
#build-res{
  background:url("@/assets/img/login_img/login.png");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
</style>