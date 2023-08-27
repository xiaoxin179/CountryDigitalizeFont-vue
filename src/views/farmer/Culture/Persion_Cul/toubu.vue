<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- 数据展示卡片 -->
        <el-card class="box-card">
          <div id="user">
            <img
              id="toux"
              src="https://img1.baidu.com/it/u=1610710809,669661118&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
            <div id="userinfo">
              <p id="name">用户名: XIAOXIN</p>

              <div class="fanwen">
                <div>总访问量:10034</div>
                <div>粉丝:123</div>
              </div>
              <p class="access">普通用户</p>
            </div>
          </div>
          <div id="login">
            <p>登录时间:<span>2023.2.12</span></p>
            <p>登录地点:<span>宁夏银川</span></p>
          </div>
        </el-card>
        <el-card class="shujutable">
          <p>我的阅读数据</p>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="阅读量" width="180" />
            <el-table-column prop="address" label="等级" />
          </el-table>
        </el-card>
        <el-card class="tongji">
          <!-- 统计图 -->
          <div ref="echarts1" style="height: 300px"></div>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 20px">
        <div class="gongao">
          <el-card class="box-card">
            <div class="h_toubu">
              <div class="system-gg">我发布的活动</div>
              <div class="system-gg">我发布的帖子</div>
              <div class="system-gg">消息通知</div>
              <el-popover placement="bottom" width="250" trigger="hover">
                <div style="display: flex;justify-content: space-between;"> 
                  <el-button>发布活动</el-button>
                  <el-button>发布贴子</el-button>
                </div>
                <template #reference>
                  <el-button>我要发布</el-button>
                </template>
              </el-popover>
            </div>
          </el-card>
        </div>
        <el-card class="tongji2">
          <p>月活数据折现线图</p>
          <!-- 第二个统计图 -->
          <div ref="echarts2" style="height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
import * as echarts from "echarts";
import { ref, unref } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";
export default {
  name: "firstpage",
  data() {
    return {
      visible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "1",
          address: "Lv1",
        },
        {
          date: "2016-05-02",
          name: "3",
          address: "Lv1",
        },
        {
          date: "2016-05-04",
          name: "7",
          address: "Lv3",
        },
        {
          date: "2016-05-01",
          name: "12",
          address: "Lv4",
        },
      ],
      systemMess: [
        { id: 1, title: "人工智能技术推动科技发展", date: "2020-04-15" },
        { id: 2, title: "科技神器改变生活方式", date: "2020-05-17" },
        { id: 3, title: "智能设备推进智慧城市建设", date: "2020-08-20" },
        { id: 4, title: "人工智能技术推动科技发展", date: "2020-04-15" },
        { id: 5, title: "赋能城市的智慧服务体系", date: "2020-07-12" },
      ],
    };
  },
  mounted() {
    var myChart1 = echarts.init(this.$refs.echarts1);
    // 指定图表的配置项和数据
    var option1 = {
      title: {
        text: "销量",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["AK47", "M249", "S686", "vector", "M24", "s686"],
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

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    var myChart2 = echarts.init(this.$refs.echarts2);
    var option2 = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };
    myChart2.setOption(option2);
  },
  components: {
    Icon,
  },
};
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
</script>
<style scoped>
.box-card {
  height: 300px;
}
/* 用户头像样式 */
#toux {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 40px;
}
/* 设置用户信息卡片样式 */
#user {
  display: flex;
  align-items: center;
  color: rgb(17, 173, 173);
  font-size: 15px;
  border-bottom: 1px solid #999;
  margin-bottom: 15px;
}
/* 登录信息样式 */
#login {
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  line-height: 35px;
  color: #999;
}
/* 设置数据展示的样式 */
.shujutable {
  margin-top: 20px;
}
/* 设置系统公告的样式 */
.gongao {
  margin-right: 20px;
  font-size: 20px;
  color: black;
}
/* 设置"系统公告"样式 */
.system-gg {
  line-height: 35px;
  border-bottom: 1px solid #999;
  font-weight: bold;
  border-right: 3px solid #ccc;
}
/* 因为v-for指令为每个迭代项设置了一个特殊的属性：item，这样就可以使用.item来选择每一项。 */
.item {
  display: flex;
  justify-content: space-between;
  color: rgb(7, 78, 78);
  font-family: 宋体;
  line-height: 35px;
}
/* 统计图样式2 */
.tongji {
  margin-top: 15px;
}
/* 第二个统计图的样式 */
.tongji2 {
  margin-top: 20px;
  margin-right: 20px;
}
/* 总访问量 */
.fanwen {
  display: flex;
  justify-content: space-between;
}
.h_toubu {
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
