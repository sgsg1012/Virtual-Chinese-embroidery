<template>
  <div class="home_page">
    <div class="img">
      <img src="../res/homePage.png" style="width: 100%; height: 28vw" alt="" />
    </div>
    <div class="search">
      <el-button class="type">非遗村落</el-button>
      <input class="input" type="text" placeholder="输入目的地或城市" />
      <img class="icon1" src="../res/search.jpg" alt="" />
      <img class="icon2" src="../res/pos.jpg" alt="" />
    </div>
    <div class="content">
      <div class="choose">
        <el-button
          class="btn"
          style="background: #c54646; color: white"
          @click="this.$router.push({ path: '/pattern' })"
          >黄梅村</el-button
        >
        <el-button class="btn">天门</el-button>
        <el-button class="btn">大治</el-button>
        <el-button class="btn">洪湖</el-button>
        <el-button class="btn">宜都</el-button>
        <el-button class="btn">大悟</el-button>
        <el-button class="btn">更多</el-button>
      </div>
      <div class="imgs">
        <div class="row">
          <div class="col">
            <img class="img" src="./../res/home1.png" alt="" />
          </div>
          <div class="col">
            <img class="img" src="./../res/home2.png" alt="" />
          </div>
          <div class="col">
            <img class="img" src="./../res/home3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/font.css";

export default {
  setup() {},
  data() {
    return {};
  },
  components: {},
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
  margin: auto;
  .img {
    width: 100vw;
  }
  .search {
    border-radius: 10px;
    margin-top: -30px;
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: row;
    position: relative;
    background: white;
    .type {
      height: 100%;
      border: none;
      font-size: 18px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #000000;
    }
    .input {
      text-indent: 25px;
      width: 100%;
      border: none;
      outline: none;
    }
    .icon1 {
      position: absolute;
      left: 96%;
      top: 25%;
      height: 50%;
    }
    .icon2 {
      position: absolute;
      height: 50%;
      left: 8.5%;
      top: 25%;
    }
  }
  .content {
    width: 80%;
    margin-top: 20px;
    .choose {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .btn {
        height: 50px;
        width: 15%;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Bold;
        font-weight: 700;
        text-align: left;
      }
    }
    .imgs {
      margin-top: 10px;
      .row {
        display: flex;
        flex-direction: row;
        .col {
          margin: 5px;
          flex: 1;
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
}
</style>
