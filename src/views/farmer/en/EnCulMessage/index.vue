<template>
  <div>
    <h1>村级自然资源综合信息管理系统</h1>
  </div>
  <div style="font-weight: bolder">
    建立在GIS地理信息可视化技术和卫星遥感技术基础上，对农村林地、旱地、水田，河流等自然资源进行分类测绘管理。
  </div>
  <div style="display: flex">
    <div class="shuzi">
      <div class="row">
        <div class="box" style="background-color: rgba(16, 16, 17, 0.2)">
          <h1 class="num">{{ dataList[0].num }}</h1>
          <h1 class="name">经济林(亩)</h1>
        </div>
        <div class="box" style="background-color: rgba(36, 36, 39, 0.7)">
          <h1 class="num">{{ dataList[1].num }}</h1>
          <h1 class="name">耕地（亩）</h1>
        </div>
      </div>
      <div class="row">
        <div class="box" style="background-color: rgba(36, 36, 39, 0.7)">
          <h1 class="num">{{ dataList[2].num }}</h1>
          <h1 class="name">果园（亩）</h1>
        </div>
        <div class="box" style="background-color: rgba(16, 16, 17, 0.2)">
          <h1 class="num">{{ dataList[3].num }}</h1>
          <h1 class="name">沙地（亩）</h1>
        </div>
      </div>
    </div>
    <div>
      <div class="dis" style="margin-top: 200px">
        <Icon
          icon="mingcute:flight-land-line"
          width="50px"
          style="
            border: 4px solid #202020;
            cursor: pointer;
            position: relative;
            top: 25;
          "
          :style="iconStyle"
          @mouseover="changeBackgroundColor(true)"
          @mouseleave="changeBackgroundColor(false)"
        />
        <div>
          <div>
            <h3>MD5唯一地块ID</h3>
          </div>
          <div style="margin-left: 10px">
            支持全球地块搜索，无缝关联面积、位置、确权、气候、土壤、作物、投入品信息。
          </div>
        </div>
      </div>
      <div class="dis" style="margin-top: 2px">
        <Icon
          icon="ph:paperclip"
          width="50px"
          style="
            border: 4px solid #202020;
            cursor: pointer;
            position: relative;
            top: 27;
          "
          :style="iconStyle"
          @mouseover="changeBackgroundColor(true)"
          @mouseleave="changeBackgroundColor(false)"
        />
        <div>
          <div>
            <h3>具备深度农产溯源的先天优势</h3>
          </div>
          <div style="margin-left: 10px">
            系统独有的自然资源地块管理信息流，为农产溯源提供了原生的、完整的、深度的数据支持。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      isHovered: false,
      dataList: [
        { name: "LinDi", num: 120 },
        {
          name: "GenDi",
          num: 120,
        },
        {
          name: "ShaDi",
          num: 120,
        },
        {
          name: "果园",
          num: 120,
        },
      ],
      dataList2: [
        { name: "LinDi", num: 1278 },
        {
          name: "GenDi",
          num: 3096,
        },
        {
          name: "ShaDi",
          num: 1253,
        },
        {
          name: "果园",
          num: 1200,
        },
      ],
    };
  },
  computed: {
    iconStyle() {
      return {
        width: "50px",
        border: "4px solid #202020",
        backgroundColor: this.isHovered ? "yellow" : "",
      };
    },
  },
  components: {
    Icon,
  },
  methods: {
    move() {
      let timer = setInterval(() => {
        for (let index = 0; index < this.dataList.length; index++)
          if (this.dataList[index].num < this.dataList2[index].num) {
            this.dataList[index].num++;
            this.move();
          } else {
            clearInterval(timer);
          }
      }, 60);
    },
    changeBackgroundColor(isHovered) {
      this.isHovered = isHovered;
    },
  },
  mounted() {
    this.move();
  },
};
</script>
<style scoped>
.shuzi {
  width: 600px;
  height: 600px;
  border: 1px solid #ccc;
  margin-left: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-image: url("../../../../assets/Environments/1.png");
  z-index: -1;
  margin-top: 20px;
}
.box {
  border: 1px solid #ccc;
  width: 200px;
  height: 200px;
}
.num {
  font-size: 37px;
  color: rgb(29, 211, 59);
  align-items: center;
}
.name {
  color: rgb(245, 229, 12);
  font-size: 35px;
}
.dis {
  display: flex;
  margin-left: 40px;
}
</style>