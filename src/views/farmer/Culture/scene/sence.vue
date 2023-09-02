<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="box-card">
          <div class="lunbo">
            <Lunbo />
          </div>
        </el-card>
        <div class="tiezi">
          <Tiezi />
        </div>
      </el-col>
      <el-col :span="8">
        <remen />
        <Huoyue />
      </el-col>
    </el-row>
  </div>
</template>
  <script>
import { Icon } from "@iconify/vue";
import Lunbo from "../homePage/lunbo.vue";
import Tiezi from "../homePage/tiezi.vue";
import remen from "../scene/remen.vue";
import Huoyue from "../scene/huoyue.vue";
export default {
  components: {
    Lunbo,
    Tiezi,
    Icon,
    remen,
    Huoyue,
  },
  data() {
    return {};
  },
};
</script>

  <style scoped>
/* 设置主要展示区域 */
* {
  margin: 0;
  border: 0;
  padding: 0;
}
.box-card {
  border-radius: 5px;
}
</style>
  