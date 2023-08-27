<template>
  <!-- 头部标签 -->
  <div style="margin-left: 360px; margin-right: 360px">
    <div class="top">
      <div
        style="
          font-size: 30px;
          border-bottom: 1px solid black;
          font-family: 楷体;
          margin-top: 20px;
          font-weight: bolder;
          display: flex;
          margin-bottom: 20px;
        "
      >
        <Icon icon="fluent:app-title-24-regular" />
        关于我们
        <div style="margin-bottom: 20px;margin-left:900px;">
          <el-button type="Info" @click="this.$router.push('/')">回到首页</el-button>
        </div>
      </div>
    </div>
    <!-- 引言部分 -->
    <div class="yinyang">
      <div
        style="
          font-size: 25px;
          font-family: 宋体;
          margin-top: 20px;
          font-weight: bolder;
        "
      >
        项目特色:
      </div>
      <div style="font-size: 20px; font-family: 宋体; margin-top: 17px">
        <ul>
          <li>
            以乡村特色为主题，聚焦宁夏固原：通过在交易过程中强调乡村文化、乡村产品的特色，突出乡村特色，吸引更多的买家。
          </li>
          <li>
            定制化服务：根据买家的需求，提供个性化的商品定制服务，满足买家的个性化需求。
          </li>
          <li>
            担保交易：为保障买家权益，提供担保交易服务，确保交易安全稳定。
          </li>
          <li>
            社交化交易：通过社交媒体平台提供交易服务，让买家和卖家之间建立更好的互动和信任，提高交易效率。
          </li>
          <li>
            农产品直达：通过合作农户及第三方物流公司，实现从农场直达消费者的快速配送服务，缩短物流环节。
          </li>
        </ul>
      </div>
      <div></div>
    </div>
    <!-- 整体介绍 -->
    <div class="shuom">
      <div
        style="
          font-size: 25px;
          font-family: 宋体;
          margin-top: 20px;
          font-weight: bolder;
        "
      >
        整体介绍:
      </div>
      <div style="font-size: 20px; font-family: 宋体; margin-top: 17px">
        <ul>
          <li>
            以乡村特色为主题：通过在交易过程中强调乡村文化、乡村产品的特色，突出乡村特色，吸引更多的买家。以乡村振兴的六大核心为主导，主要有五大模块，主要模块为产业振兴，开发一个乡村村民，城市市民为交易对象搭建乡村定制农业线上平台，对于人才振兴，则是通过大数据分析乡村成年人的走向，，搭建一个可视化平台，并且鼓励他们回乡创业。对于文化振兴就是深入挖掘优秀传统农耕文化蕴含的思想理念、人文精神和道德规范，通过文章或者视频展示系统中。生态文明建设就是爬取互联网中的保护生态的信息提升人们保护环境的意识。组织振兴则是村干部发布给村民重要通知的模块。
          </li>
        </ul>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="guanyu">
      <div
        style="
          font-size: 25px;
          font-family: 宋体;
          margin-top: 20px;
          font-weight: bolder;
        "
      >
        关于我们:
      </div>
      <li>团队介绍:本项目由大数据集成应用与开发团队开发</li>
      <li>问题反馈:</li>
      <div class="lx">
        <div class="lx_1">
          <Icon
            icon="ic:outline-wechat"
            width="40px"
            color="pink"
            @click="showQrcodeDialog"
            class="wechat-icon"
          />
          <el-dialog v-model="qrcodeDialogVisible" title="微信二维码">
            <!-- 在此处插入展示您的微信二维码的代码 -->
            <div style="max-height: 80vh; overflow-y: auto">
              <!-- 在此处插入展示您的微信二维码的代码 -->
              <img
                src="src\assets\img\aboutImg\wechat.jpg"
                alt=""
                style="width: 300px; display: flex"
              />
            </div>
          </el-dialog>
        </div>
        <div class="lx_2">
          <Icon
            icon="logos:google-gmail"
            width="40px"
            color="pink"
            class="wechat-icon"
            @click="dialogVisible_1 = true"
          />
          <el-dialog
            title="Emails"
            v-model="dialogVisible_1"
            :close-on-click-modal="false"
          >
            <div
              style="
                font-size: 25px;
                font-family: 宋体;
                margin-top: 10px;
                margin-bottom: 30px;
              "
            >
              <p>qq邮箱:3034507585@qq.com</p>
              <p>gmail:dgy3034507585@gmail.com</p>
            </div>
            <span class="dialog-footer">
              <el-button type="primary" @click="dialogVisible_1 = false"
                >关闭</el-button
              >
            </span>
          </el-dialog>
        </div>
        <div class="lx_3">
          <el-dialog
            title="QQ二维码"
            v-model="dialogVisible"
            custom-class="lx-dialog"
            @close="dialogVisible = false"
          >
            <div style="text-align: center">
              <img
                src="@/assets/img/aboutImg/qq.png"
                style="width: 200px; height: 200px"
              />
              <br /><br />
              <el-button type="primary" @click="dialogVisible = false"
                >关闭</el-button
              >
            </div>
          </el-dialog>
          <div class="lx_3">
            <icon
              icon="cib:tencent-qq"
              class="wechat-icon"
              width="35px"
              @click="openDialog"
              style="margin-top: 15px"
            />
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
      qrcodeDialogVisible: false, // 控制Dialog是否可见的变量
      dialogVisible_1: false,
      dialogVisible: false,
    };
  },
  methods: {
    showQrcodeDialog() {
      this.qrcodeDialogVisible = true; // 点击图标后使Dialog可见
    },
    openDialog() {
      this.dialogVisible = true;
    },
  },
  components: {
    Icon,
  },
};
</script>
  <style  scoped>
li {
  line-height: 40px;
  font-size: 23px;
  font-family: 宋体;
  color: dimgray;
}
.wechat-icon:hover {
  cursor: pointer;
}
/* 设置联系我们的标签 */
.lx {
  display: flex;
}
.lx_2 {
  margin-left: 150px;
}
.lx_3 {
  margin-left: 150px;
  margin-top: -10px;
}
</style>