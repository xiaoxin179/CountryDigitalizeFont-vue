<template>
  <div>
    <h1>村级小气候与环境信息管理子系统</h1>
  </div>
  <div
    style="
      display: flex;
      margin-top: 100px;
      justify-content: center;
      flex-wrap: wrap;
    "
  >
    <div class="box">
      <div class="title">基础水文</div>
      <div class="content">
        不同的日照时长会影响动物的繁殖活动，有的动物需要在长日照的条件下进行繁殖，有的要在短日照的条件下进行繁殖，同样地，对植物也会有影响，如阴生植物与阳生植物。
      </div>
      <div ref="echarts1" style="height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">降水量mm</div>
      <div class="content">
        及时监测雨量变化，对于人们的生产生活的作用是极其明显的，对于农业上的灌溉有一定的指导作用，能够随时的监测和了解降雨多少，从而为防旱抗涝提供科学的依据。
      </div>
      <div ref="chartContainer" style="height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">土壤养分</div>
      <div class="content">
        土壤肥力空间变化对人为调控和定向培育土壤肥力,改善土壤生态环境,土地修复,增加地的活力和动力，促进区域农业和社会的可持续发展具有重要的现实意义
      </div>
      <div ref="echarts2" style="height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">土壤中量元素</div>
      <div class="content">
        中量元素多数是植物体内促进光合作用、呼吸作用以及物质转化作用等的酶或辅酶的组成部分。作物缺乏任何一种中量元素时，生长发育都会受到抑制，导致减产和品质下降
      </div>
      <div ref="echarts3" style="height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">水质安全</div>
      <div class="content">
        水质监测对整个水环境保护、人畜饮水安全、工业生产、追溯污染源、评价污染防治措施、水污染控制以及维护水环境健康方面起着至关重要的作用。
      </div>
      <div ref="chart" style="width: 400px; height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">日照LUX</div>
      <div class="content">
        适宜的光照强度可以促进光合作用顺利进行，为作物生长提供足够的物质和能量。依照不同植物生长特点，适合植物光合作用的光照强度一般在10000-30000勒克司
      </div>
      <div ref="echarts4" style="height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">细分日照时长</div>
      <div class="content">
        不同的日照时长会影响动物的繁殖活动，有的动物需要在长日照的条件下进行繁殖,有的要在短日照的条件下进行繁殖,同样地，对植物也会有影响，如阴生植物与阳生植物。
      </div>
      <div ref="echarts5" style="width: 400px; height: 300px"></div>
    </div>
    <div class="box">
      <div class="title">有效光和W/m2</div>
      <div class="content">
        光合有效辐射(400-700
        nm)是影响光合作用的关键因子,有助于碳循环和碳驱动机制的研究,其敏感性对全球气候系统有着重要的影响,在不同的陆地生态系统模型中,都是重要的输入参数。
      </div>
      <div ref="echarts6" style="height: 300px"></div>
    </div>
  </div>
</template>
  <script>
import { Icon } from "@iconify/vue";
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: null,
      xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周天"],
      seriesData: [820, 932, 901, 934, 1290, 1330, 1320],
    };
  },
  components: {
    Icon,
  },
  methods: {
    // 让下述数据动态变化的三个函数
    updateChart() {
      // 更新数据
      this.seriesData = this.getRandomData();

      const option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
            areaStyle: {},
          },
        ],
      };

      // 更新图表
      this.myChart.setOption(option);
    },
    getRandomData() {
      const data = [];
      for (let i = 0; i < this.xAxisData.length; i++) {
        data.push(Math.floor(Math.random() * 10));
      }
      return data;
    },
    beforeDestroy() {
      // 销毁echarts实例
      if (this.myChart) {
        this.myChart.dispose();
      }
    },
    // 动态柱状图所涉及到的三个函数
    initializeChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.data = [];
      for (let i = 0; i < 5; ++i) {
        this.data.push(Math.round(Math.random() * 20));
      }
      this.chart.setOption(this.getChartOption());
    },
    run() {
      for (let i = 0; i < this.data.length; ++i) {
        if (Math.random() > 0.9) {
          this.data[i] += Math.round(Math.random() * 200);
        } else {
          this.data[i] += Math.round(Math.random() * 20);
        }
      }
      this.chart.setOption({
        series: [
          {
            type: "bar",
            data: this.data,
          },
        ],
      });
    },
    getChartOption() {
      return {
        xAxis: {
          max: "dataMax",
        },
        yAxis: {
          type: "category",
          data: ["A", "B", "C"],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 1, // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: "",
            type: "bar",
            data: this.data,
            label: {
              show: true,
              position: "right",
              valueAnimation: true,
            },
          },
        ],
        legend: {
          show: true,
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      };
    },
  },
  mounted() {
    const myChart1 = echarts.init(this.$refs.echarts1);
    // 指定配置的图表和数据
    const option1 = {
      tooltip: {},
      xAxis: {
        data: ["", "", "", "", "", ""],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    // 使用指定的配置项和数据
    myChart1.setOption(option1);
    this.myChart = echarts.init(this.$refs.chartContainer);

    this.updateChart(); // 初始渲染

    // 定时器，每隔1秒更新一次数据
    setInterval(
      function () {
        this.updateChart();
      }.bind(this),
      1000
    );
    // d第三个echarts图
    const myChart2 = echarts.init(this.$refs.echarts2);
    const option2 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "氮" },
            { value: 735, name: "磷" },
            { value: 580, name: "钾" },
            { value: 484, name: "钙" },
            { value: 300, name: "纳" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart2.setOption(option2);
    const myChart3 = echarts.init(this.$refs.echarts3);
    const option3 = {
      tooltip: {
        trigger: "item1",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 580, name: "钾" },
            { value: 484, name: "钙" },
            { value: 700, name: "纳" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart3.setOption(option3);
    // 第四个动态的图
    this.initializeChart();
    this.run();
    setInterval(this.run, 200);
    // 第六个
    const myChart4 = echarts.init(this.$refs.echarts4);
    const option4 = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周天"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        },
      ],
    };
    myChart4.setOption(option4);
    const myChart5 = echarts.init(this.$refs.echarts5);
    const option5 = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["product", "215", "2016", "2017"],
        source: [
          { product: "", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: "", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    };
    myChart5.setOption(option5);
    const myChart6 = echarts.init(this.$refs.echarts6);
    const option6 = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["product", "2015", "2016", "2017"],
        source: [
          { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    };
    myChart6.setOption(option6)
  },
};
</script>
  <style scoped>
.box {
  width: 400px;
  border: 1px solid #ccc;
  height: 400px;
  margin: 20px;
}
.title {
  font-size: 24px;
  color: #ccc;
  text-align: left;
  margin: 3px;
  font-family: 宋体;
}
.content {
  font-size: 17px;
  line-height: 24px;
  text-align: left;
  margin: 3px;
  color: rgb(100, 95, 95);
  font-weight: lighter;
}
</style>