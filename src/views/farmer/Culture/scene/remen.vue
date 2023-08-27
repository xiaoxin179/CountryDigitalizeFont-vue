<template>
  <el-card class="cb">
    <div>
      <div class="toubu">
        <div>
            <p>最近热门</p>
        </div>
        <div>
            <el-button type="primary" @click="changeHot">换一批</el-button>
        </div>
      
      </div>
      <ul>
        <li v-for="item in hotList" :key="item.id" class="lli">{{ item.title }}</li>
      </ul>
    </div>

  </el-card>
</template>
  
<script>
export default {
  data() {
    return {
      hotList: [
      {
          id: 1,
          title: "活动数据1",
        },
        {
          id: 2,
          title: "活动数据2",
        },
        {
          id: 3,
          title: "活动数据3",
        },
        {
          id: 4,
          title: "活动数据4",
        },
        {
          id: 5,
          title: "活动数据5",
        },
        {
          id: 6,
          title: "活动数据6",
        },
        {
          id: 7,
          title: "活动数据7",
        },
        {
          id: 7,
          title: "活动数据7",
        },
        {
          id: 6,
          title: "活动数据6",
        },
      ],
    };
  },
  methods: {
    
    getActivityList() {
      // 这里调用后台接口获取最新的数据
      this.activityList = [
      ];
    },
  },
  mounted() {
    this.getActivityList();
  },
};
</script>
<style scoped>
.cb {
  width:300px;
  border-radius:5%;
}
.toubu{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.lli{
  line-height: 40px;
  font-size:20px;
  font-weight: lighter;
}
</style>