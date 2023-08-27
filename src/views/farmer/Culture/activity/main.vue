<template>
  <div class="main">
    <div style="margin: 10px; border: 3px solid #ccc; cursor: pointer">
      <Icon icon="ri:group-line" width="35px" />
      <div>集体活动</div>
    </div>
    <div style="margin: 10px; border: 3px solid #ccc; cursor: pointer">
      <Icon icon="clarity:group-solid" width="35px" />
      <div>组织活动</div>
    </div>
    <div style="margin: 10px; border: 3px solid #ccc; cursor: pointer">
      <Icon icon="fe:notice-active" width="35px" />
      <div>通知公告</div>
    </div>
  </div>
  <div style="width: 600px; margin-left: 650px">
    <div v-for="item in Tonzhi" :key="item.id" style="display: flex;border-bottom: 3px solid #ccc;">
      <div style="text-align: left;">
        <div style="font-size:25px;font-weight: bolder;">{{ item.Tiltle }}</div>
        <div  style="font-size: 19px;color: rgb(156, 147, 133);">地点:{{ item.address }}</div>
        <div > 
          <Icon icon="ph:eye-bold" style="position: relative;top:3px"/>{{ item.see }}
        </div>
        <div></div>
      </div>
      <div>
        <img :src="item.url" alt="" class="img">
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import image1 from '@/assets/activity/1.webp'
export default {
  data() {
    return {
      Tonzhi: [
        {
          id: 1,
          Tiltle: "于十一日晚上七点举行的乡村新年晚会活动",
          url: image1,
          address: "村委会",
          see:"12"
        },
        {
          id: 2,
          Tiltle: "于十九日晚上九点举行的乡村歌舞晚会活动",
          url: "../../../../assets/",
          address: "村委会",
          see:"13"
        },
        {
          id: 2,
          Tiltle: "于十九日晚上九点举行的乡村歌舞晚会活动",
          url: "../../../../assets/",
          address: "村委会",
          see:"13"
        },
        {
          id: 2,
          Tiltle: "于十九日晚上九点举行的乡村歌舞晚会活动",
          url: "../../../../assets/",
          address: "村委会",
          see:"13"
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
}
.img{
    width:70px;
    margin-left: 20px;
}
</style>