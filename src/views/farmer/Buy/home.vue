<template>
    <div id="home_buy">
      <div class="topbar">
        <div class="nav">
          <ul>
            <!-- 在已经登录的状态下就显示登录注册标签 -->
            <li>
              <router-link to="/order">我的订单</router-link>
            </li>
            <li>
              <router-link to="/collect">我的收藏</router-link>
            </li>
            <li :class="getNum > 0 ? 'shopCart-full' : 'shopCart'">
              <router-link to="/shoppingCart">
                <i class="el-icon-shopping-cart-full"></i> 购物车
              </router-link>
            </li>
            <li>
              <router-link to="/">回到首页</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 主要的内容显示区域 -->
  
      <el-main>
        <!-- 顶栏容器 -->
        <el-header>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#409eff"
            router
          >
            <el-menu-item index="/farmer/buy" style="margin-right:20px;font-size:20px;font-weight:bolder">首页</el-menu-item>
            <el-menu-item index="/farmer/buy/goods" style="margin-left:20px;font-size:20px;font-weight:bolder">全部商品</el-menu-item>
            <el-menu-item index="/farmer/buy/about" style="margin-left:20px;font-size:20px;font-weight:bolder">关于我们</el-menu-item>
  
            <div
              class="so"
              style="display: flex; margin-bottom: 10px; margin-left: 660px"
            >
              <el-input
                placeholder="请输入搜索内容"
                v-model="search"
                style="margin-right: 10px"
              >
              </el-input>
              <el-button style="font-size:20px;">搜索</el-button>
            </div>
          </el-menu>
        </el-header>
        <!-- 顶栏容器END -->
        <!-- 主要区域容器 -->
        <router-view></router-view>
      </el-main>
  
      <!-- 顶部导航栏END -->
      <el-footer>
        <div class="footer">
          <div class="ng-promise-box">
            <div class="ng-promise">
              <p class="text">
                <a class="icon1" href="javascript:;">助力乡村发展</a>
                <a class="icon2" href="javascript:;">全面建设富裕乡村</a>
                <a class="icon3" style="margin-right: 0" href="javascript:;"
                  >100%品质保证</a
                >
              </p>
            </div>
          </div>
          <div class="github">
            <a href="https://github.com/hai-27/vue-store" target="_blank">
              <div class="github-but"></div>
            </a>
          </div>
          <div class="mod_help">
            <p>
              <router-link to="/">首页</router-link>
              <span>|</span>
              <router-link to="/goods">全部商品</router-link>
              <span>|</span>
              <router-link to="/about">关于我们</router-link>
            </p>
            <p class="coty">北方民族大学计算机科学与工程学院 &copy; 2023-2050</p>
          </div>
        </div>
      </el-footer>
      <!-- 底栏容器END -->
    </div>
  </template>
<script>
export default{
  data(){
    return{
      search:"",
    }
  }
}
</script>
<style scoped>
  /* 全局CSS */
* {
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
}
#home_buy .el-header {
    padding: 0;
}
#home_buy .el-main {
    min-height: 300px;
    padding: 20px 0;
}
#home_buy .el-footer {
    padding: 0;
}
  a,
  a:hover {
    text-decoration: none;
  }
  /* 全局CSS END */
  /* 顶部导航栏CSS */
  .mjd {
    padding-left: 0px;
  }
  .topbar {
    height: 40px;
    background-color: #64616e;
    margin-bottom: 20px;
  }
  .topbar .nav {
    width: 1225px;
    margin: 0 auto;
  }
  .topbar .nav ul {
    float: right;
  }
  .topbar .nav li {
    float: left;
    height: 40px;
    color: #b0b0b0;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    margin-left: 20px;
  }
  .topbar .nav .sep {
    color: #b0b0b0;
    font-size: 12px;
    margin: 0 5px;
  }
  .topbar .nav li .el-button {
    color: #b0b0b0;
  }
  .topbar .nav .el-button:hover {
    color: #fff;
  }
  .topbar .nav li a {
    color: #b0b0b0;
  }
  .topbar .nav a:hover {
    color: #fff;
  }
  .topbar .nav .shopCart {
    width: 120px;
    background: #424242;
  }
  .topbar .nav .shopCart:hover {
    background: #fff;
  }
  .topbar .nav .shopCart:hover a {
    color: #ff6700;
  }
  .topbar .nav .shopCart-full {
    width: 120px;
    background: #ff6700;
  }
  .topbar .nav .shopCart-full a {
    color: white;
  }
  /* 顶部导航栏CSS END */
  /* 底栏容器CSS */
  .footer {
    width: 100%;
    text-align: center;
    background: #2f2f2f;
    padding-bottom: 20px;
  }
  .footer .ng-promise-box {
    border-bottom: 1px solid #3d3d3d;
    line-height: 145px;
  }
  .footer .ng-promise-box {
    margin: 0 auto;
    border-bottom: 1px solid #3d3d3d;
    line-height: 145px;
  }
  .footer .ng-promise-box .ng-promise p a {
    color: #fff;
    font-size: 20px;
    margin-right: 210px;
    padding-left: 44px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    text-decoration: none;
    /* background: url("./assets/imgs/us-icon.png") no-repeat left 0; */
  }
  .footer .github {
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
  }
  .footer .github .github-but {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    /* background: url("./assets/imgs/github.png") no-repeat; */
  }
  .footer .mod_help {
    text-align: center;
    color: #888888;
  }
  .footer .mod_help p {
    margin: 20px 0 16px 0;
  }
  .footer .mod_help p a {
    color: #888888;
    text-decoration: none;
  }
  .footer .mod_help p a:hover {
    color: #fff;
  }
  .footer .mod_help p span {
    padding: 0 22px;
  }
  .coty {
    font-size: 22px;
  }
  /* 底栏容器CSS END */
  /* 顶栏容器CSS */
.el-header .el-menu {
    max-width: 1225px;
    margin: 0 auto;
}
  .el-header .logo {
    height: 60px;
    width: 189px;
    float: left;
    margin-right: 100px;
  }
  .el-header .so {
    margin-top: 10px;
    width: 300px;
    float: right;
  }
  /* 顶栏容器CSS END */
  </style>
  