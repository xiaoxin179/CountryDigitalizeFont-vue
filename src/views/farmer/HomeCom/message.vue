<template>
  <el-card class="TopCard" style="height: 50px">
    <!-- 小喇叭 -->
    <i class="el-icon-chat-dot-round" style="color: #606266" />
    <span class="tips">公告:</span>
    <!-- 滚动文字外层div，文字能展示的区域-->
    <div
      class="noticeBox"
      :style="
        'width:' +
        noticeWidth +
        'px;height:20px;position:relative;overflow:hidden;display:inline-block;vertical-align:middle;margin-top:-5px'
      "
    >
      <!-- 滚动div，marginLeft变化-->
      <div :style="'margin-left:' + marginLeft + 'px;white-space:nowrap'">
        <span class="showNotice">{{ showNotice }}</span>
        <!-- 不会展示，用来测量第二条与第一条重合时的长度 -->
        <span class="notice">{{ notice }}</span>
      </div>
    </div>
  </el-card>
</template>
  
  <script>
export default {
  name: "message",
  data() {
    return {
      // 适应屏幕分辨率
      noticeWidth: window.screen.width - 150,
      // 公告展示（过长时会重复两遍）
      showNotice: "",
      // 用于公告过长时，获取重复两遍中第一遍的长度
      notice: "",
      // 公告初始位置
      marginLeft: 100,
    };
  },
  mounted() {
    this.noticeData = [
        '尊敬的各位村民:为加快乡村振兴的步伐，改善乡村环境，推动村庄的发展，我们决定暂停一切有关破坏环境的活动.',
        '各位村民请在2月25日之前提交个人信息,完成个人信息登记备案',
        '本周的天气将会出现极大的变化,预计高温将达到32摄氏度,低温可能降至15摄氏度。为了保护您的健康,请您注意多喝水，多吃水果，并着凉爽的衣服。'
    ];
    this.noticeData.forEach((val, index) => {
      if (index === 0) {
        this.showNotice += "【" + (index + 1) + "】" + val;
      } else {
        this.showNotice +=
          "\xa0\xa0\xa0\xa0\xa0\xa0【" + (index + 1) + "】" + val;
      }
    });
    // 公告上面先赋值，再获取宽度
    setTimeout(() => {
      // 公告div长度
      var oneNoticeWidth =
        document.getElementsByClassName("showNotice")[0].offsetWidth;
      // 公告外层div长度
      var noticeBoxWidth =
        document.getElementsByClassName("noticeBox")[0].offsetWidth;
      // 一条公告长度太大时，才滚动
      if (oneNoticeWidth > noticeBoxWidth) {
        // 滚动公告需要将公告重复两遍进行滚动，两遍中间需要加空格
        this.notice =
          this.showNotice +
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        // 上面先赋值，再获取宽度
        setTimeout(() => {
          // 获取一遍加中间空格的长度，即左移时第二遍与第一遍完全重合时的长度
          var oneNoticeAddEmptyWidth =
            document.getElementsByClassName("notice")[0].offsetWidth;
          // 公告内容重复两遍
          this.showNotice = this.notice + this.showNotice;
          this.timer = setInterval(() => {
            this.marginLeft -= 1;
            // 第二遍与第一遍起始位置重合时（第一条已完全移到左侧隐藏），marginLeft置0，即回到第一条
            if (this.marginLeft === -1 * oneNoticeAddEmptyWidth) {
              this.marginLeft = 0;
            }
          }, 20);
        }, 10);
      } else {
        //公告并没有很长时不滚动
        this.marginLeft = 0;
      }
    }, 10);
  },
};
</script>
  <style>
/* 公告card */
.TopCard .el-card__body {
  padding: 0px 10px;
 
}
/* 公告title */
.tips {
  line-height: 50px;
  color: #6d7992;
  font-weight: bold;
}

</style>
  