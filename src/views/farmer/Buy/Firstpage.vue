<!-- 首页组件 -->
<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="(item, index) in carouselData" :key="index">
          <img style="height: 460px" src="carouselData.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图END -->
    <!-- 时蔬展示专区 -->
    <div class="main-box">
      <div class="main">
        <div class="shuiguo">
          <div class="title_fenlei">
            <div>
              固原特色:
              <span style="margin-left: 1140px"
                ><el-button>查看全部</el-button></span
              >
            </div>
          </div>
          <br />
          <figure v-for="(item, index) in products_ts" :key="index">
            <img :src="item.image" alt="" />
            <figcaption>
              <h2 style="font-family: 楷体">{{ item.title }}</h2>
              <p>
                <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                <i><Icon icon="icon-park-outline:like" width="32" /></i>
                <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                <i class="fa fa-tags"></i>
              </p>
              <h5>
                <a href="#" class="jiage a1">{{ item.price }}</a>
                <a href="#" class="cahndi a2">{{ item.location }}</a>
                <a href="#" class="yuexiao a3">月销:{{ item.sales }}</a>
              </h5>
            </figcaption>
          </figure>
        </div>
        
        <div class="shishu">
          <div class="title_fenlei">
            <div>
              时蔬:
              <span style="margin-left: 1140px"
                ><el-button>查看全部</el-button></span
              >
            </div>
          </div>
          <br />
          <div>
            <!-- 右侧商品 -->
            <div class="contaner">
              <div class="product-list">
                <figure v-for="(item, index) in products_ss" :key="index">
                  <img :src="item.image" alt="" />
                  <figcaption>
                    <h2 style="font-family: 楷体">{{ item.title }}</h2>
                    <p>
                      <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                      <i><Icon icon="icon-park-outline:like" width="32" /></i>
                      <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                      <i class="fa fa-tags"></i>
                    </p>
                    <h5>
                      <a href="#" class="jiage a1">{{ item.price }}</a>
                      <a href="#" class="cahndi a2">{{ item.location }}</a>
                      <a href="#" class="yuexiao a3">月销:{{ item.sales }}</a>
                    </h5>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <!-- 水果展示区 -->
        <div></div>
        <div class="xuzhi">
          <div class="title_fenlei">
            畜殖:
            <span style="margin-left: 1140px"
              ><el-button>查看全部</el-button></span
            >
          </div>
          <br />
          <figure v-for="(item, index) in products_sg" :key="index">
            <img :src="item.image" alt="" />
            <figcaption>
              <h2 style="font-family: 楷体">{{ item.title }}</h2>
              <p>
                <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                <i><Icon icon="icon-park-outline:like" width="32" /></i>
                <i><Icon icon="icon-park-outline:buy" width="32" /></i>
                <i class="fa fa-tags"></i>
              </p>
              <h5>
                <a href="#" class="jiage a1">{{ item.price }}</a>
                <a href="#" class="cahndi a2">{{ item.location }}</a>
                <a href="#" class="yuexiao a3">月销:{{ item.sales }}</a>
              </h5>
            </figcaption>
          </figure>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
  <script>
import { Icon } from "@iconify/vue";
import image1 from '@/assets/buy_img/1.jpg';
import beefImage from '@/assets/buy_img/beef.jpg';
import image2 from '@/assets/buy_img/apple.jpg';
import image3 from '@/assets/buy_img/beef.jpg'
import image4 from '@/assets/buy_img/zao.jpg'
import image5 from '@/assets/buy_img/lajiao.jpg'
import image6 from '@/assets/buy_img/chicken.jpg'
import image7 from '@/assets/buy_img/tudou.jpg'
import image8 from '@/assets/buy_img/qinvcai.jpg'


export default {
  components: {
    Icon,
  },
  data() {
    return {
      carouselData: [
      { src: image1 },
        { src: beefImage },
        { src: beefImage },
        { src: beefImage },
        { src: beefImage },
      ],
      products_ss: [
        {
          title: "商品1",
          image: image1,
          price: "12元",
          location: "重庆",
          sales: 120,
        },
        {
          title: "商品2",
          image: image1,
          price: "20元",
          location: "上海",
          sales: 80,
        },
        {
          title: "商品3",
          image: image1,
          price: "30元",
          location: "北京",
          sales: 60,
        },
        {
          title: "商品4",
          image: image1,
          price: "40元",
          location: "广州",
          sales: 90,
        },
        {
          title: "商品5",
          image: image1,
          price: "50元",
          location: "深圳",
          sales: 70,
        },
        {
          title: "商品6",
          image: image1,
          price: "50元",
          location: "深圳",
          sales: 70,
        },
      ],
      products_sg: [
        {
          title: "香蕉",
          image: image2,
          price: 3.99,
          location: "北京",
          sales: 128,
        },
        {
          title: "草莓",
          image: image2,
          price: 6.49,
          location: "上海",
          sales: 76,
        },
        {
          title: "苹果",
          image: image2,
          price: 4.99,
          location: "广州",
          sales: 91,
        },
        {
          title: "橙子",
          image: image2,
          price: 2.99,
          location: "深圳",
          sales: 112,
        },
        {
          title: "葡萄",
          image: image2,
          price: 8.99,
          location: "成都",
          sales: 64,
        },
        {
          title: "猕猴桃",
          image:image2,
          price: 7.49,
          location: "杭州",
          sales: 83,
        },
      ],
      products_xz: [],
      products_ts: [
        
        {
          title: "泾源黄牛肉",
          price: 120,
          location: "泾河源镇",
          image: image3,
          sales: 25,
        },
        {
          title: "彭阳红梅杏",
          price: 120,
          location: "泾河源镇",
          image: image4,
          sales: 25,
        },
        {
          title: "彭阳辣椒",
          price: 25,
          image: image5,
          location: "白阳镇",
          sales: 216,
        },
        {
          title: "固原红鸡",
          price: 50,
          image: image6,
          location: "古城镇",
          sales: 84,
        },
        {
          title: "西吉马铃薯",
          price: 48,
          image: image6,
          location: "六盘山",
          sales: 103,
        },
        {
          title: "西吉西芹",
          price: 10,
          image: image7,
          location: "西吉县",
          sales: 182,
        },
      ],
    };
  },
};
</script>
  <style scoped>
@import "../../../../public/css/index.css";

.shishu {
  margin: 0 auto;
  max-width: 1225px;
}
/* 设置所有的分类文字的样式 */
.title_fenlei {
  font-size: 20px;
  font-family: 宋体;
  margin-top: 20px;
}

.container {
  position: relative;
  width: 100%;
  display: float;
  justify-content: center;
  align-items: center;
  /* 允许换行*/
  flex-wrap: wrap;
}

figure {
  float: left;
  position: relative;
  margin: 5px 14px 1%;
  width: 380px;
  height: 265px;
  overflow: hidden;
  background-color: #34495e;
}

figcaption {
  color: rgb(19, 9, 9) 909;
}

/* 黑色边框 */
figcaption::before,
figcaption::after {
  content: "";
  width: 150%;
  height: 150%;
  position: absolute;
  border-style: solid;
  border-color: #101010;
  transition: transform 0.35s;
  /* 这里需要设置元素不对鼠标事件做出反应，图标的悬停效果才会实现 */
  pointer-events: none;
}

/* 右、下边框 */
figcaption::before {
  right: 0;
  bottom: 0;
  border-width: 0 70px 60px 0;
  /* 默认移除可视区域 */
  transform: translate(70px, 60px);
}

/* 左、上边框 */
figcaption::after {
  top: 0;
  left: 0;
  border-width: 15px 0 0 15px;
  /* 默认移除可视区域 */
  transform: translate(-15px, -15px);
}

/* 图片 */
figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  /* 过渡 */
  transition: 0.35s;
}

/* 标题 */
figure h2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 5px;
  font-weight: 300;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
  transform: translate(100%, 0);
  transition: transform 0.35s;
}

figure h2 span {
  font-weight: 700;
}
figcaption h5 {
  display: flex;
  position: absolute;
  margin-top: 227px;
  font-size: 20px;
  font-family: serif;
  transform: translate(57%, 0);
  opacity: 0;
  flex-direction: row;
  transition: opacity 0.35s, transform 0.35s;
}
figure:hover p i {
  transform: translate(0, 0);
}

figure:hover h5 {
  opacity: 1;
}

figure:hover h5 :nth-child(1) {
  transition-delay: 0.1s;
}

/* figure:hover h5  :nth-child(2) {
      transition-delay: 0.1s;
    }
    
    figure:hover h5  :nth-child(3) {
      transition-delay: 0.15s;
    } */
a {
  text-decoration: none;
}
a:link {
  color: brown;
}
a:visited {
  color: rgb(255, 255, 255);
}
a:hover {
  color: blueviolet;
}
.jiage,
.cahndi,
.yuexiao {
  float: left;
  margin-right: 30px;
}
/* 功能图标区域 */
figure p {
  position: absolute;
  top: 25px;
  right: 0;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 70px;
  justify-content: center;
  align-items: center;
}

figure p i {
  margin-bottom: 30px;
  font-size: 22px !important;
  cursor: pointer;
  /* 默认隐藏 */
  transform: translate(150px, 50%);
  opacity: 0;
  /* 过渡 */
  transition: opacity 0.35s, transform 0.35s;
}

/* 鼠标悬停效果
    figure:hover figcaption::before,
    figure:hover figcaption::after {
      transform: translate(0, 0);
    } */

figure:hover img {
  opacity: 0.8;
  width: 100%;
  height: 100%;
}

figure:hover h2,
figcaption:hover span {
  transform: translateX(-15px);
}

figure:hover p i {
  transform: translate(0, 0);
}

figure:hover p i {
  opacity: 1;
}

figure:hover p i:nth-child(1) {
  transition-delay: 0.025s;
}

figure:hover p i:nth-child(2) {
  transition-delay: 0.05s;
}

figure:hover p i:nth-child(3) {
  transition-delay: 0.075s;
}

figure:hover p i:nth-child(4) {
  transition-delay: 0.1s;
}

figure p i:hover {
  color: #f3cf3f;
}
</style>