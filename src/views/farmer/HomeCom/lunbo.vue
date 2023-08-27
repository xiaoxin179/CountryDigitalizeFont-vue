<template>
  <div class="carousel-map">
    <el-carousel
      :interval="4000"
      @change="changeImg"
      style="width: 100%; margin-top: 1px"
      trigger="click"
      height="43.5rem"
    >
      <el-carousel-item v-for="(item, index) in courseData" :key="index">
        <el-image
          :class="className"
          style="width: 100%; height: 100%"
          :src="item.url"
          fit="cover"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import img1 from '@/assets/img-index/1.jpg';
import img2 from '@/assets/img-index/2.jpg';
import img3 from '@/assets/img-index/3.jpg';
export default {
  data() {
    return {
      courseData: [
      { url: img1 },
      { url: img2 },
      { url: img3 },
      ],
      className: "",
    };
  },
  mounted() {
    this.className = "lun-img";
    setTimeout(() => {
      this.className = "lun-img-two";
    }, 300);
  },
  methods: {
    //轮播图切换
    changeImg(e) {
      // console.log(e, "当前下标");
      this.className = "lun-img";
      setTimeout(() => {
        this.className = "lun-img-two";
      }, 300);
    },
  },
};
</script>
<style  scoped>
/* 设置轮播图的css */
.carousel-map {
  width: 100%;
  height: 43.5rem;
  overflow: hidden;
}
.lun-img {
  transform: scale(1.5);
}
.lun-img-two {
  transition: all 3s;
  transform: scale(1);
}
.el-carousel__item.is-animating {
  transition: all 0.6s;
}
/* 轮播图css代码结束 */
</style>