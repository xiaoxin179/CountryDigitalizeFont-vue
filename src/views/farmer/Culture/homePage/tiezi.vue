<template>
  <div class="main">
    <el-card>
      <div class="everyone" v-for="tiezi in tiezhu" :key="tiezi.id">
        <div class="toubu">
          <div class="toubu_zuo">
            <img :src="tiezi.toux" alt="" id="toux" />
            <div class="name">{{ tiezi.name }}</div>
          </div>
          <el-button type="danger" class="btn">关注</el-button>
        </div>
        <div class="wenzi">
          {{ tiezi.content }}
        </div>
        <div class="img_suishou">
          <img :src="tiezi.src" alt="" id="tup" />
        </div>
        <div class="dibu">
          <div class="dibu_zuo">
            <div>2023年3月17日</div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-tag style="margin: 3px; position: relative; top: -4px"
              ><el-iccon></el-iccon>#风景分享</el-tag
            >
            <el-tag style="margin: 3px; position: relative; top: -4px"
              >#优秀民俗</el-tag
            >
          </div>
          <div class="dibu_r">
            <Icon icon="solar:eye-bold" width="23px" style="margin-left: 6px" />
            <div class="num_pg">{{ tiezi.saw }}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Icon icon="icon-park-solid:good-two" height="23px" />
            <div class="num_pg">{{ tiezi.good }}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Icon icon="mdi:message-processing-outline" height="23px" />
            <div class="num_pg">{{ tiezi.pinlun }}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import image1 from "@/assets/wx_hd/xc1.jpg";
import image2 from "@/assets/toux/tx1.jpg";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      tiezhu: [
        {
          id: 1,
          name: "xiaoxin1",
          src: image1,
          toux: image2,
          content:
            "栎城民俗文化园（江苏）：在这里，可以深刻感受到江苏乡村建筑的历史文化底蕴，听到田园风光中传来的民歌，体验一下江苏特色的乡村生活。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
        {
          id: 2,
          name: "xiaoxin2",
          src: image1,
          toux: image2,
          content:
            "南湖风景名胜区（安徽）：在这里，可以欣赏到安徽众多湖泊和清新的湖水风光，体会到安徽热情洋溢的民俗文化，享受乡村恬静的氛围。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
        {
          id: 3,
          name: "xiaoxin3",
          src: image1,
          toux: image2,
          content:
            "南宁鹿岭古茶园（广西）：在这里，可以感受到广西的热情，欣赏着鹿岭古茶园中的青山绿水，品尝鹿岭特有茶叶，是一种难得的乡村旅游体验。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
        {
          id: 4,
          name: "xiaoxin4",
          src: image1,
          toux: image2,
          content:
            "莆田后湖旅游度假区（福建）：在这里，可以感受到福建湖景的宁静，欣赏着后湖林中的湖光山色，享受乡村小憩的快乐，是一个极具乡村特色的旅游地。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
        {
          id: 5,
          name: "xiaoxin5",
          src: image1,
          toux: image2,
          content:
            "鹤庆瑶族风情园（云南）：在这里，可以品尝到云南特有的瑶族风味，欣赏着瑶族景观，体会到云南的浓郁的民俗文化，是一次近距离接触云南乡村的好去处。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
        {
          id: 6,
          name: "xiaoxin4",
          src: image1,
          toux: image2,
          content:
            "紫阳古镇（湖北）：在这里，可以沉浸在湖北古镇中的恬静氛围中，感受到湖北古镇风情的独特性，体验古镇散步的悠闲和舒适，是一次让人置身古镇的难忘之旅。",
          pinlun: Math.floor(Math.random() * 100),
          good: Math.floor(Math.random() * 100),
          saw: Math.floor(Math.random() * 300),
        },
      ],
    };
  },
};
</script>
<style scoped>
.main {
  padding-top: 10px;
}
.everyone {
  height: 400px;
  border-bottom: 1px solid rgb(95, 92, 92);
}
/* 设置图片样式 */
#toux {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
/* 设置头部样式 */
.toubu {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.toubu_zuo {
  margin-left: 50px;
  display: flex;
  border-bottom: 1px solid pink;
}
.name {
  margin-left: 10px;
  font-family: 楷体;
  font-size: 25px;
  align-items: center;
}
.btn {
  margin-right: 50px;
}
.wenzi {
  line-height: 30px;
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  height: 60px;
}
#tup {
  display: flex;
  width: 30%;
  height: auto;
  padding-left: 30px;
  padding-top: 30px;

  border-radius: 10px;
}
.dibu {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-top: 20px;
  font-weight: lighter;
  align-items: center;
}
.dibu_zuo {
  display: flex;
  justify-content: space-between;
}
.num_pg {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: lighter;
}
.dibu_r {
  display: flex;
}
</style>
