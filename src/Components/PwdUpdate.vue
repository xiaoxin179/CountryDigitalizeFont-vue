<template>
  <el-form :model="updateForm">
    <div>
      <el-input
        placeholder="输入用户身份证"
        style="width: 450px; margin: 10px; margin-top: 50px"
        v-model="updateForm.idcard"
        prop="idcard"
        :disabled="isUpdate === false"
      ></el-input>
    </div>
    <div>
      <el-input
        placeholder="输入新的密码"
        type="password"
        style="width: 450px; margin: 10px"
        v-model="updateForm.password"
        prop="password"
        :disabled="isUpdate === false"
      ></el-input>
    </div>
    <div>
      <el-input
        placeholder="确认密码"
        type="password"
        style="width: 450px; margin: 10px"
        v-model="updateForm.confirmPwd"
        prop="confirmPwd"
        :disabled="isUpdate === false"
      ></el-input>
    </div>
  </el-form>
  <el-button style="margin: 10px" @click="update">修改</el-button>
  <el-button type="primary" style="margin-left: 320px" @click="save"
    >确认</el-button
  >
</template>
<script setup>
import { reactive, ref } from "vue";
const updateForm = reactive({});
const isUpdate = ref(false);
import request from "../utils/request";
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";
import router from "../router";
const update = () => {
  isUpdate.value = true;
};
const store=useUserStore()
const form=reactive()
const user=store.user
const save = () => {
    user.password=updateForm.password
    user.idcard=updateForm.idcard
    request.post("/user/updatePwd",user).then((res)=>{
        if(res.code==='200'){
            ElMessage.success("用户密码修改成功！")
            router.push('/login')
        }
        else{
            ElMessage.error(res.msg)
        }
    })
  updateForm.idcard = "";
  updateForm.password = "";
  updateForm.confirmPwd = "";
};
</script>
<style>
</style>