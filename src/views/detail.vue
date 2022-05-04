<template>
  <div class="home_page">
    <div class="left">
      <div class="types">
        <div
          style="
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #707070;
          "
        >
          非遗门类
        </div>
        <div class="search">
          <input type="text" placeholder="搜索非遗门类" />
          <img class="icon" src="./../res/search.jpg" alt="" />
        </div>
        <div class="btns">
          <div class="row">
            <el-button class="active btn">黄梅桃花</el-button>
            <el-button class="btn">天门糖塑</el-button>
            <el-button class="btn">滩头年画</el-button>
          </div>
          <div class="row">
            <el-button class="btn">汉绣</el-button>
            <el-button class="btn">阳新布贴</el-button>
            <el-button class="btn">雕花剪纸</el-button>
          </div>
          <div class="row">
            <el-button class="btn">高龙扎制</el-button>
            <el-button class="btn">红安绣花</el-button>
            <el-button class="btn">木板年画</el-button>
          </div>
          <div class="row">
            <el-button class="btn">枝江楠管</el-button>
            <el-button class="btn">木雕船模</el-button>
            <el-button class="btn">更多</el-button>
          </div>
        </div>
      </div>
      <div class="imagery">
        <div
          style="
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #707070;
          "
        >
          图案意象
        </div>
        <div class="search">
          <input type="text" placeholder="搜索图案" />
          <img class="icon" src="./../res/search.jpg" alt="" />
        </div>
        <div class="btns">
          <div class="row">
            <el-button class="active btn">蝴蝶</el-button>
            <el-button class="btn">花朵</el-button>
            <el-button class="btn">星星</el-button>
            <el-button class="btn">更多</el-button>
          </div>
        </div>
        <img class="img" src="../res/butterfly.png" alt="" />
      </div>
    </div>
    <div class="right">
      <div
        style="
          font-size: 20px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #707070;
        "
      >
        图案生成
      </div>
      <div class="img_area">
        <img class="img" src="../res/butterfly2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style lang="less" scoped>
.home_page {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
  margin: auto;
  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    .types {
      margin: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #f6f6f6;
      border: 1px solid #f6f6f6;
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      .search {
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        input {
          margin: auto;
          width: 60%;
          border: 1px solid #ffffff;
          border-radius: 20px;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
          outline: none;
          text-indent: 20px;
        }
        .icon {
          height: 80%;
          position: absolute;
          left: 75%;
          top: 15%;
        }
      }
      .btns {
        display: flex;
        flex-direction: column;
        .row {
          .btn {
            background: #e6e6e6;
            margin: 5px;
            width: 30%;
            border: 1px solid #e6e6e6;
            border-radius: 22px;

            font-size: 15px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #383838;
          }
        }
      }
    }
    .imagery {
      background: #f6f6f6;
      border: 1px solid #f6f6f6;
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      margin: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      .search {
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        input {
          margin: auto;
          width: 60%;
          border: 1px solid #ffffff;
          border-radius: 20px;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
          outline: none;
          text-indent: 20px;
        }
        .icon {
          height: 80%;
          position: absolute;
          left: 75%;
          top: 15%;
        }
      }
      .btns {
        display: flex;
        flex-direction: column;
        .row {
          width: 100%;
          .btn {
            background: #e6e6e6;
            margin: 5px;
            width: 20%;
            border: 1px solid #e6e6e6;
            border-radius: 22px;

            font-size: 15px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #383838;
          }
        }
      }
      .img {
        margin: auto;
        width: 60%;
      }
    }
  }
  .right {
    height: 90vh;
    margin: 20px;
    width: 60%;
    // margin: 20px;
    display: flex;
    flex-direction: column;
    .img_area {
      height: 100%;
      margin: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: 1px solid #ffffff;
      border-radius: 10px;
      margin-left: 30px;
      .img {
        width: 100%;
        margin: auto;
      }
    }
  }
}
.active {
  background: #c54646 !important;
  color: white !important;
}
</style>
