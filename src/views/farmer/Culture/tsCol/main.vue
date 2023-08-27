  <template>
  <el-row>
    <Lunbo />
    <el-col :span="12" style="padding-top: 20px"
      ><div class="grid-content bg-purple">
        <!-- <el-card class="card1">
          <div class="baidu" ref="mapBaidu" />
        </el-card> -->
        <el-card>
          <div>
            <div class="font-title">小镇发展历程</div>
            <div>
              <div class="font-content">
                西海固黄沙遍野，不是吃土就是吃沙！被评为“最不适宜人类生存的地区之一”。第27届白玉兰奖最佳中国电视剧《山海情》讲的就是这里的故事！山代表宁夏，海代表福建，福建“对口帮扶”宁夏，二十多年来让黄沙漫天的闽宁镇，变成了寸土寸金的金沙滩！
              </div>
              <div>
                <video
                  src="../../../../assets/video/1.mp4"
                  style="width: auto; height: 500px"
                  controls
                ></video>
              </div>
              <img
                src="../../../../assets/img-shanghai/sucai.png"
                alt=""
                style="width: auto; height: 500px"
              />
            </div>
            <div class="font-content">
              位于中国西部宁夏回族自治区的西海固，是宁夏中南部国家级贫困县区的统称，也是最不适宜人类生存的地区之一。宁夏广播电视台电视专题节目《黄河谣》，去到宁夏闽宁镇，见证干沙滩迈进小康的沧海巨变！
            </div>
            <div class="font-title">秦声赞闽宁</div>
            <div class="font-content">
              在赵鸿文化大剧院里，担任节目艺术总监的赵鸿正在筹备一曲关于闽宁发展的“赞歌”——《秦声赞闽宁》：“当年搬到黄羊滩，戈壁荒滩无人烟。扛起洋镐把地整，种下粮食扎下根。移民搬迁拔穷根，富民政策暖人心。双手共建闽宁镇，共圆伟大中国梦……”，描绘的就是闽宁镇从“干沙滩”到“金沙滩”的变化过程。
              《山海情》热播之后，赵鸿文化大剧院将剧中一些场景进行还原，吸引了很多人的关注，也让这些场景还原点成为了网红打卡热点。
            </div>
            <img src="../../../../assets/img-shanghai/645.png" alt="" class="img"/>
            <div style="margin-bottom: 20px">移民生活的居室</div>
            <img src="../../../../assets/img-shanghai/646.png" class="img"/>
            <div style="margin-bottom: 20px">“水花”的食杂店</div>
            <img src="../../../../assets/img-shanghai/647.png" class="img"/>
            <div style="margin-bottom: 20px">“马德福”家的院子</div>
            <div class="font-content">
              今天的闽宁镇，已经走在建成小康社会的康庄大道之上,这是闽宁镇二十五年来践行对口扶贫的壮丽篇章,也是闽宁镇6.6万西海固移民的高光时刻！
            </div>
            <img src="../../../../assets/img-shanghai/652.png" alt="">
          </div></el-card
        >
      </div></el-col
    >
    <el-col :span="12" style="padding-left: 10px; padding-top: 20px">
      <div class="grid-content bg-purple-light">
        <el-card>
          <div>
            <div class="font-title">干沙滩，终于变成了金沙滩</div>
            <div class="font-content">
              如今的闽宁镇，实现了习近平总书记曾经的预言：“闽宁村现在是个干沙滩，将来会是一个金沙滩。”这场脱贫攻坚战的胜利，离不开每一个人的努力。
            </div>
            <img
              src="../../../../assets/img-shanghai/66.png"
              alt=""
              class="img"
            />
            <div class="font-content">
              西海固，原本自然环境极度恶劣，既没有水路可走，也没有旱路可行。宁夏政府另谋希望之路，采用“移民吊庄”的策略，将六万多人整体搬迁移民到宁夏永宁县闽宁镇。建设闽宁镇，如同横跨高山，逾越大海一样艰难。
            </div>
            <img src="../../../../assets/img-shanghai/640.png" alt="" class="img"/>
            <div class="font-content">
              福建响应国家政策，对宁夏进行了大力帮扶。经过二十多年的开荒建设，昔日的干沙滩变成了如今寸土寸金的金沙滩，移民们的生活也发生了翻天覆地的变化。闽宁镇因扶贫而生，为脱贫而建，经历了从无到有、从穷到富的艰难发展路程。
            </div>
          </div>
          <img src="../../../../assets/img-shanghai/641.jpg" alt="" class="img"/>
          <img src="../../../../assets/img-shanghai/642.png" alt="" class="img"/>
          <img src="../../../../assets/img-shanghai/643.png" alt=""  class="img"/>
          <div class="font-title">葡萄美酒成名片</div>
          <div class="font-content">在《山海情》中，黄轩饰演的马德福对宁夏葡萄酒进行了“带货”演讲。</div>
          <img src="../../../../assets/img-shanghai/648.png" alt="" class="img">
          <div class="font-content">宁夏贺兰山东麓被业界公认是世界上最适合种植酿酒葡萄和生产高端葡萄酒的黄金地带之一。闽宁镇依托被称作“东方波尔多”的贺兰山东麓，大力发展葡萄酒产业，目前已生产出中国最好的葡萄酒。</div>
        </el-card>
      </div></el-col
    >
  </el-row>
</template>
<script >
// import { onMounted, ref } from "vue";
import Lunbo from "./Lunbo.vue";
export default {
  data() {
    return {
      dataList: [{ name: "people", num: 0 }],
      dataList2: [{ name: "people", num: 110 }],
    };
  },
  components: {
    Lunbo,
  },
  methods: {
    move() {
      let timer = setInterval(() => {
        for (let index = 0; index < this.dataList.length; index++)
          if (this.dataList[index].num < this.dataList2[index].num) {
            this.dataList[index].num++;
            // this.move();
          } else {
            clearInterval(timer);
          }
      }, 30);
    },
  },
  mounted() {
    this.move();
  },
};
// const mapBaidu = ref();
// onMounted(() => {
//   var map = new BMapGL.Map(mapBaidu.value); // 创建地图实例
//   var point = new BMapGL.Point(105.977392,38.197375); // 创建点坐标
//   var zoomCtr1 = new BMapGL.ZoomControl(); // 添加缩放控件
//   var label = new BMapGL.Label("木兰村", {
//     // 创建文本标注
//     position: point, // 设置标注的地理位置
//     offset: new BMapGL.Size(0, 0), // 设置标注的偏移量
//   });
//   // 添加标签
//   map.addOverlay(label); // 将标注添加到地图中
//   // 设置标签的样式
//   label.setStyle({
//     fontSize: "10px",
//     color: "red",
//   });
//   map.addControl(zoomCtr1);
//   //鼠标滚轮播放
//   map.enableScrollWheelZoom(true);
//   map.centerAndZoom(point, 15);
//   map.addControl(new BMapGL.ScaleControl(700)); // 添加比例尺控件
// });
</script>
<style scoped>
.baidu {
  width: 900px;
  height: 600px;
}
.card1 {
  height: 660px;
}
.font-content {
  color: rgb(69, 170, 170);
  font-size: 23px;
  font-weight: lighter;
  text-align: left;
  text-indent: 2em;
}
.font-title {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  color: rgb(79, 79, 80);
}
.img{
  height:500px;
  width: auto;
}
</style>