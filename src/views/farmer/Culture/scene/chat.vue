<script setup>
import { nextTick, onMounted, ref } from "vue";
import V3Emoji from "vue3-emoji";
import "vue3-emoji/dist/style.css";
import { useUserStore } from "@/stores/user";
import request from "@/utils/request";

const messages = ref([]);

const userStore = useUserStore();
const user = userStore.getUser;

const text = ref(""); // 聊天输入的内容
const divRef = ref(); // 聊天框的引用

// 页面滚动到最新位置的函数
const scrollBottom = () => {
  nextTick(() => {
    // 等到页面元素出来之后再去滚动
    divRef.value.scrollTop = divRef.value.scrollHeight;
  });
};

// 页面加载完成触发此函数
onMounted(() => {
  request.get("/im/init/10").then((res) => {
    messages.value = res.data;

    scrollBottom();
  });
});

const client = new WebSocket(`ws://localhost:9090/imserver/${user.userid}`);

// 发送消息触发滚动条滚动
const send = () => {
  // messages.value.push(text.value)虚假的数据，添加到message数组中
  if (client) {
    client.send(text.value);
  }
  text.value = ""; // 清空文本框
  divRef.value.scrollTop = divRef.value.scrollHeight;
};

const optionsName = {
  "Smileys & Emotion": "笑脸&表情",
  "Food & Drink": "食物&饮料",
  "Animals & Nature": "动物&自然",
  "Travel & Places": "旅行&地点",
  "People & Body": "人物&身体",
  Objects: "物品",
  Symbols: "符号",
  Flags: "旗帜",
  Activities: "活动",
};

client.onopen = () => {
  console.log("open");
};
client.onclose = () => {
  // 页面刷新的时候和后台websocket服务关闭的时候
  console.log("close");
};
client.onmessage = (msg) => {
  if (msg.data) {
    let json = JSON.parse(msg.data);
    if (json.userid && json.text) {
      // 聊天消息
      messages.value.push(json);
      scrollBottom(); // 滚动页面到最底部
    }
  }
};
</script>

<template>
  <div style="width: 55%; margin: 10px auto">
    <div
      ref="divRef"
      style="
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 400px;
        overflow-y: scroll;
      "
    >
      <div v-for="item in messages" :key="item.userid + item.createTime">
        <div
          style="
            display: flex;
            margin: 20px 0;
          "
          v-if="user.userid !== item.userid"
        >
          <el-popover placement="top-start" :width="100" trigger="hover">
            <template #reference>
              <img
                :src="item.avatar"
                alt=""
                style="
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-right: 10px;
                "
              />
            </template>
            <div style="line-height: 20px">
              <div style="font-size: 16px">{{ item.username }}</div>
              <div style="font-size: 12px">{{ item.sign }}</div>
            </div>
          </el-popover>

          <div>
            <div style="font-size:8px;font-family: 宋体;margin:3px;font-weight: bolder;color: rgb(104, 101, 96);">{{ item.username }}</div>
            <!--          <div style="width: 50px; line-height: 30px; margin-left: 5px; color: #888; overflow: hidden; font-size: 14px">{{ item.username }}</div>-->
            <div
              style="
                line-height: 30px;
                background-color: aliceblue;
                padding: 0 10px;
                width: fit-content;
                border-radius: 10px;
              "
            >
              {{ item.text }}
            </div>
          </div>
        </div>

        <div
          style="display: flex; justify-content: flex-end; margin: 20px 0"
          v-else
        >
          <div
            style="
              line-height: 30px;
              background-color: lightyellow;
              padding: 0 10px;
              width: fit-content;
              border-radius: 10px;
            "
          >
            {{ item.text }}
          </div>
          <!-- 鼠标出现在头像上的时候，出现的框框 -->
          <el-popover placement="top-start" :width="100" trigger="hover">
            <template #reference>
              <img
                :src="item.avatar"
                alt=""
                style="
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-left: 10px;
                "
              />
            </template>
            <div style="line-height: 20px">
              <div style="font-size: 16px">{{ item.username }}</div>
              <div style="font-size: 12px">{{ item.sign }}</div>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <div style="margin: 10px 0; width: 100%">
      <V3Emoji
        default-select="recent"
        :recent="true"
        :options-name="optionsName"
        :keep="true"
        :textArea="true"
        size="mid"
        v-model="text"
      />
      <div style="text-align: right">
        <el-button
          @click="send"
          type="primary"
          >发送</el-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.container > :nth-child(3) {
  flex-basis: 100%; /* 强制第三个项目占据一整行 */
}
</style>
