<template>
    <div class="goods" id="goods" name="goods">
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
          <el-breadcrumb-item>全部商品</el-breadcrumb-item>
          <el-breadcrumb-item v-if="search">搜索</el-breadcrumb-item>
          <el-breadcrumb-item v-else>分类</el-breadcrumb-item>
          <el-breadcrumb-item v-if="search">{{ search }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 面包屑END -->
  
      <!-- 分类标签 -->
      <div class="nav">
        <div class="product-nav">
          <div class="title">分类</div>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane
              v-for="item in categoryList"
              :key="item.category_id"
              :label="item.category_name"
              :name="''+item.category_id"
            />
          </el-tabs>
        </div>
      </div>
      <!-- 分类标签END -->
  
      <!-- 主要内容区 -->
      <div class="main">
        <div class="list">
          <div v-if="product.length > 0">
            <el-table :data="product" border>
              <el-table-column prop="id" label="编号"></el-table-column>
              <el-table-column prop="name" label="名称"></el-table-column>
              <el-table-column prop="price" label="价格"></el-table-column>
            </el-table>
          </div>
          <div v-else class="none-product">抱歉没有找到相关的商品，请看看其他的商品</div>
        </div>
        <!-- 分页 -->
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="currentChange"
          ></el-pagination>
        </div>
        <!-- 分页END -->
      </div>
      <!-- 主要内容区END -->
    </div>
  </template>
  
  <script>
  export default {
    // 组件数据
    data() {
      return {
        categoryList: [
          { category_id: 0, category_name: "全部" },
          { category_id: 1, category_name: "时蔬" },
          { category_id: 2, category_name: "牲畜" },
          { category_id: 3, category_name: "特色产品" },
        ],
        product: [
          { id: 1, name: "商品1", price: 10, category_id: 1 },
          { id: 2, name: "商品2", price: 20, category_id: 2 },
          { id: 3, name: "商品3", price: 30, category_id: 1 },
          { id: 4, name: "商品4", price: 40, category_id: 3 },
          { id: 5, name: "商品5", price: 50, category_id: 2 },
          { id: 6, name: "商品6", price: 60, category_id: 1 },
        ],
        total: 6,
        pageSize: 15,
        currentPage: 1,
        activeName: "-1",
        search: "",
      };
    },
    // 生命周期函数
    created() {},
    // 组件方法
    methods: {
      // 监听页码变化
      currentChange(currentPage) {
        this.currentPage = currentPage;
        if (this.search != "") {
          this.getProductBySearch();
        } else {
          this.getData();
        }
      },
      // 获取数据
      getData() {
        let data = {Product: [], total: 0};
        if (this.categoryID.length == 0) {
          data.Product = this.product;
          data.total = this.product.length;
        } else {
          data.Product = this.product.filter(item => {
            return this.categoryID.includes(item.category_id);
          });
          data.total = data.Product.length;
        }
        this.product = data.Product.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        this.total = data.total;
      },
      // 根据搜索关键字获取数据
      getProductBySearch() {
        let data = {Product: [], total: 0};
        if (this.search != "") {
          data.Product = this.product.filter((item) => {
            return item.name.toLowerCase().includes(this.search.toLowerCase());
          });
          data.total = data.Product.length;
        } else {
          data.Product = this.product;
          data.total = this.product.length;
        }
        this.product = data.Product.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
        this.total = data.total;
      },
      // 获取分类列表
      getCategory() {},
    },
    // 监听数据变化
    watch: {},
  };
  </script>
  <style scoped>
  .goods {
    background-color: #f5f5f5;
  }
  /* 面包屑CSS */
  .el-tabs--card .el-tabs__header {
    border-bottom: none;
  }
  .goods .breadcrumb {
    height: 50px;
    background-color: white;
  }
  .goods .breadcrumb .el-breadcrumb {
    width: 1225px;
    line-height: 30px;
    font-size: 16px;
    margin: 0 auto;
  }
  /* 面包屑CSS END */
  /* 分类标签CSS */
  .goods .nav {
    background-color: white;
  }
  .goods .nav .product-nav {
    width: 1225px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
  .nav .product-nav .title {
    width: 50px;
    font-size: 16px;
    font-weight: 700;
    float: left;
  }
  /* 分类标签CSS END */
  /* 主要内容区CSS */
  .goods .main {
    margin: 0 auto;
    max-width: 1225px;
  }
  .goods .main .list {
    min-height: 650px;
    padding-top: 14.5px;
    margin-left: -13.7px;
    overflow: auto;
  }
  .goods .main .pagination {
    height: 50px;
    text-align: center;
  }
  .goods .main .none-product {
    color: #333;
    margin-left: 13.7px;
  }
  /* 主要内容区CSS END */
  </style>