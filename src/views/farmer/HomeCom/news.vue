<template>
  <div>
    <el-row>
      <!-- 弹出提示框 -->
      <el-dialog
        width="70%"
        :before-close="handleClose"
        v-model="dialogVisible"
        style="border-radius: 12px"
      >
        <h1>{{ dialogTitle }}</h1>
        <p style="font-size: 20px; line-height: 25px">{{ dialogContent }}</p>
        <span class="dialog-footer">
          <el-button @click="close">关闭</el-button>
          <!-- <el-button icon="el-icon-search" circle  size="medium"></el-button> -->
          <Icon
            icon="icon-park-twotone:good-one"
            @click="good"
            :style="{ color: isGood ? 'red' : 'black' }"
            style="position: relative; top: 10px; margin-left: 20px"
            width="33px"
          />
        </span>
      </el-dialog>
      <el-col :span="12" style="margin-top: 20px">
        <!-- 最新活动通知 -->
        <el-card class="box-card">
          <div>
            <span id="zxtz">最新活动通知:</span>
          </div>
          <br /><br />
          <div v-for="item in huodon" :key="item" class="xx">
            <div class="new">
              <div>
                <Icon
                  v-if="item.shouwIcon"
                  icon="material-symbols:fiber-new-sharp"
                  height="30px"
                  width="30px"
                />
              </div>
              <div>{{ item.h_title }}</div>
            </div>

            <div class="hon_hou">
              <div>
                <Icon
                  icon="ic:baseline-access-time"
                  width="23"
                  height="23"
                  class="icon_jt"
                />
              </div>
              <div>{{ item.h_time }}</div>
              <div>
                <el-button
                  type="text"
                  @click="change(item.h_title, item.h_content)"
                  class="ckxq"
                  >查看详情</el-button
                >
              </div>
            </div>
            <!-- 查看详情 -->
          </div>
        </el-card>
        <!-- 最新乡村公告 -->
        <el-card class="box-card" style="margin-top: 20px">
          <div>
            <span id="zxtz">最新乡村公告:</span>
          </div>
          <br /><br />
          <div v-for="item in gongao" :key="item" class="xx">
            <div class="new">
              <div>
                <Icon
                  icon="material-symbols:fiber-new-sharp"
                  height="30px"
                  width="30px"
                />
              </div>
              <div>{{ item.title }}</div>
            </div>
            <div class="hon_hou">
              <div>
                <Icon
                  icon="ic:baseline-access-time"
                  width="23"
                  height="23"
                  class="icon_jt"
                />
              </div>
              <div>{{ item.time }}</div>
              <div>
                <el-button type="text" @click="change(item.title)" class="ckxq"
                  >查看详情</el-button
                >
              </div>
            </div>
            <!-- 查看详情 -->
          </div>
        </el-card>
      </el-col>
      <!-- 右边 -->
      <el-col :span="12" style="padding-left: 20px">
        <!-- 右边的第一个div -->
        <div class="you">
          <div class="you_card">
            <!-- 精神风貌 -->
            <el-card class="box-card">
              <span id="zxtz">精神风貌:</span>
              <br /><br />
              <div v-for="item in zixun" :key="item" class="xx">
                <div class="new">
                  <div>
                    <Icon
                      icon="material-symbols:fiber-new-sharp"
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <div>{{ item.title }}</div>
                </div>

                <div class="hon_hou">
                  <div>
                    <Icon
                      icon="ic:baseline-access-time"
                      width="23"
                      height="23"
                      class="icon_jt"
                    />
                  </div>
                  <div>{{ item.time }}</div>
                  <div>
                    <el-button type="text" @click="change" class="ckxq"
                      >查看详情</el-button
                    >
                  </div>
                </div>
                <!-- 查看详情 -->
              </div>
            </el-card>
            <el-card class="box-card" style="margin-top: 20px">
              <span id="zxtz">素养提升:</span>
              <br /><br />
              <div v-for="item in zixun" :key="item" class="xx">
                <div class="new">
                  <div>
                    <Icon
                      icon="material-symbols:fiber-new-sharp"
                      height="30px"
                      width="30px"
                    />
                  </div>
                  <div>{{ item.title }}</div>
                </div>

                <div class="hon_hou">
                  <div>
                    <Icon
                      icon="ic:baseline-access-time"
                      width="23"
                      height="23"
                      class="icon_jt"
                    />
                  </div>
                  <div>{{ item.time }}</div>
                  <div>
                    <el-button type="text" @click="change" class="ckxq"
                      >查看详情</el-button
                    >
                  </div>
                </div>
                <!-- 查看详情 -->
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script >
import axios from "axios";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  mounted: function () {},
  data() {
    return {
      dialogVisible: false,
      centerDialogVisible: false,
      dialogTitle: "",
      dialogContent: "",
      isGood: false,
      shouwIcon:true,
      huodon: [
        {
          h_id: 1,
          h_title: "于十一日晚上七点举行的乡村新年晚会活动",
          h_time: "2020-05-09 19:00:00",
          h_content:
            "尊敬的乡亲们：新年将至，为了欢度这个喜庆的时刻，我们将于十一日晚上七点在村委会广场举行乡村新年晚会活动，届时将有丰富多彩的文艺节目表演、美食品尝、互动游戏等精彩活动，让我们一起度过一个难忘的新年之夜。此次活动是我们村庄的一次盛大聚会，旨在增进乡亲之间的感情，增强村民的凝聚力，同时也为大家提供一个展示自己才艺、发挥创意的平台。我们邀请了村内的优秀文艺团队和志愿者为大家奉献精彩的表演，同时还准备了各种美食和游戏，让大家在欢声笑语中度过一个愉快的夜晚。我们诚挚地邀请您和您的家人前来参加本次活动，让我们共同庆祝新年的到来，共同分享这份喜悦和快乐。谢谢！",
          dialogVisible: false,
        },
        {
          h_id: 2,
          h_title: "于十五日晚上六点举行的乡村春节联欢活动",
          h_time: "2020-05-11 18:00:00",
          h_content: "具体的相关信息",
          dialogVisible: false,
        },
        {
          h_id: 3,
          h_title: "于十六日晚上七点举行的乡村春节联欢活动",
          h_time: "2020-05-12 19:00:00",
          h_content: "具体的相关信息",
          dialogVisible: false,
        },
        {
          h_id: 4,
          h_title: "于十九日晚上九点举行的乡村歌舞晚会活动",
          h_time: "2020-05-15 21:00:00",
          h_content: "具体的相关信息",
          dialogVisible: false,
        },
        {
          h_id: 5,
          h_title: "于二十日晚上六点举行的乡村新春拜年活动",
          h_time: "2020-05-16 18:00:00",
          h_content: "具体的相关信息",
          dialogVisible: false,
        },
        {
          h_id: 6,
          h_title: "于二十一日晚上七点举行的乡村元宵节庆典活动",
          h_time: "2020-05-17 19:00:00",
          h_content: "具体的相关信息",
          dialogVisible: false,
        },
      ],
      zixun: [
        { id: 1, title: "文明礼仪在日常生活中的重要性", time: "2020-04-20" },
        { id: 2, title: "文化素养的根本概念", time: "2020-04-21" },
        { id: 3, title: "文化素养的重要性及其影响", time: "2020-04-22" },
        { id: 4, title: "文化素养在中国传统中的体现", time: "2020-04-23" },
        { id: 5, title: "文化素养在现代社会中的价值", time: "2020-04-24" },
        { id: 6, title: "文化素养对个人发展的重要性", time: "2020-04-25" },
      ],
      gongao: [
        {
          id: 1,
          title: "关于加强农村基础设施建设的公告",
          time: "2020-12-10 11:00:00",
        },
        {
          id: 2,
          title: "关于提升农村环境卫生的公告",
          time: "2020-12-20 16:00:00",
        },
        {
          id: 3,
          title: "关于改善农村教育资源的公告",
          time: "2020-12-05 09:10:00",
        },
        {
          id: 4,
          title: "关于增加农村经济发展的公告",
          time: "2020-12-30 13:59:00",
        },
        {
          id: 5,
          title: "关于完善农村供水设施的公告",
          time: "2020-12-15 19:00:00",
        },
        {
          id: 6,
          title: "关于促进农村产业发展的公告",
          time: "2020-12-22 22:30:00",
        },
      ],
    };
  },
  methods: {
    change(title, content) {
      this.centerDialogVisible = false;
      this.dialogVisible = true;
      this.dialogTitle = title;
      this.dialogContent = content;
    },
    close(item) {
      this.dialogVisible = false;
    },
    good() {
      if (this.isGood) {
        this.isGood = false;
        this.$message({
          message:'取消点赞成功',
          type:'warning'
        })
      } else {
        this.isGood = true;
        this.$message({
          message:'点赞成功',
          type:'success'
        })
      }
    },
  },
};
</script>
<style scoped>
#zxtz {
  float: left;
  font-size: 20px;
  font-weight: 10px;
  font-family: 宋体;
  color: rgb(108, 119, 115);
}
/* 设置每一条通知的链接 */
.xx {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: black;
  line-height: 45px;
  font-weight: 3px;
  cursor: grab;
  color: rgb(192, 2, 2);
  font-family: 宋体;
}
/* card样式 */
.box-card {
  height: 400px;
}
/* 设置最新活动后面的三个 */
.hon_hou {
  display: flex;
  align-items: center;
}
/* 设置查看详情的样式 */
.ckxq {
  margin-bottom: 6px;
}
/* 设置new的样式 */
.new {
  display: flex;
}
/* 设置右边的第一个卡片 */
.you_card {
  margin-top: 20px;
}
</style>