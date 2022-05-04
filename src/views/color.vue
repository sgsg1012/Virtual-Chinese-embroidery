<template>
  <div class="home_page">
    <div class="classification">
      <el-button class="btn" @click="this.$router.push({ path: '/pattern' })"
        >图案</el-button
      >
      <el-button
        class="btn"
        style="background: #c54646; color: white"
        @click="this.$router.push({ path: '/color' })"
        >色彩</el-button
      >
      <el-button class="btn">图集</el-button>
    </div>
    <div class="themes">
      <div class="themes_btn">
        <div
          style="
            margin: auto;
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #707070;
          "
        >
          主题：
        </div>
        <el-button class="btn">花草</el-button>
        <el-button class="btn">飞禽</el-button>
        <el-button class="btn">走兽</el-button>
        <el-button class="btn">人物</el-button>
        <el-button class="btn">建筑</el-button>
        <el-button class="btn">景物</el-button>
        <el-button
          style="
            margin: auto;
            border: none;
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #707070;
          "
          >更多</el-button
        >
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div class="col">
          <img class="img" src="./../res/(1,1).jpg" alt="" />
        </div>
        <div class="col">
          <img class="img" src="./../res/(1,2).jpg" alt="" />
        </div>
        <div class="col">
          <img class="img" src="./../res/(1,3).jpg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="img" src="./../res/(2,1).jpg" alt="" />
        </div>
        <div class="col">
          <img class="img" src="./../res/(2,2).jpg" alt="" />
        </div>
        <div class="col">
          <img class="img" src="./../res/(2,3).jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/font.css";
import searchBar from "../components/searchBar.vue";

export default {
  setup() {},
  data() {
    return {};
  },
  components: {
    searchBar,
  },
  methods: {
    search(data) {
      console.log(data);
    },
  },
};
</script>
<style lang="less" scoped>
.home_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  .classification {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    width: 80%;
    .btn {
      width: 200px;
      border: 1px solid #ffffff;
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    }
  }
  .themes {
    margin: 20px;
    width: 100%;
    .themes_btn {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 5px;
      border: 1px solid #ffffff;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      .btn {
        margin: auto;
        border: none;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: left;
        color: #7b7b7b;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      flex-direction: row;
      .col {
        margin: 5px;
        .img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: 1px solid #ffffff;
        }
      }
    }
  }
}
</style>
