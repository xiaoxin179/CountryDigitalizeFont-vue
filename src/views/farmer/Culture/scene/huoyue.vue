<template>
  <el-card class="main">
    <div>
      <p class="zjhy">最近活跃用户:</p>
      <ul>
        <li v-for="user in users" :key="user.id" >
          <span class="lli">{{ user.name }}</span>
        </li>
      </ul>
    </div>
  </el-card>
</template>
  
  <script>


export default {
  data() {
    return {
      users:[
        {
            id:1,
            name:'xiaoxin1'
        },
        {
            id:2,
            name:'xiaoxin2'
        },
        {
            id:3,
            name:'xiaoxin3'
        },
        {
            id:4,
            name:'xiaoxin4'
        }
      ]
    };
  },
};
</script>
  
  <style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
.main{
    width:300px;
    margin-top:6px;
    border-radius:3%;
}
.zjhy{
    display:flex;
    font-weight: lighter;
}
.lli{
  line-height:40px;
}
</style>