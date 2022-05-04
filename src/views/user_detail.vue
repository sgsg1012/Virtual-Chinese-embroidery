<template>
  <div class="deatil_page">
    <div class="header">
      <div class="infos">
        <div class="info">
          <div>人气</div>
          <div>830144</div>
        </div>
        <div class="info" style="margin-right: 200px">
          <div>作品</div>
          <div>110</div>
        </div>
        <div class="info" style="margin-left: 200px">
          <div>粉丝</div>
          <div>16416</div>
        </div>
        <div class="info">
          <div>关注</div>
          <div>4</div>
        </div>
      </div>
    </div>
    <div class="info">
      <img class="head" src="../res/user1.jpg" alt="" />
      <div class="name">Starlet斯塔雷特</div>
      <div class="id">ID号：11280322</div>
      <div class="btns">
        <el-button class="btn active">关注</el-button>
        <el-button class="btn">私信</el-button>
      </div>
    </div>
    <div class="detail_options">
      <div class="option chosen">首页</div>
      <div class="option">推荐</div>
      <div class="option">资料</div>
      <div class="option">收藏</div>
      <div class="option">动态</div>
    </div>
    <div class="content">
      <div class="information">
        <div>共上传17件作品</div>
        <div>时间最新</div>
      </div>
      <div class="row">
        <div class="work">
          <img class="img" src="../res/work1.bmp" alt="" />
          <div class="name">30Days-Magicoalor</div>
          <div class="type">新锐潮流插画</div>
          <div class="time">7天前</div>
        </div>
        <div class="work">
          <img class="img" src="../res/work2.bmp" alt="" />
          <div class="name">Dryad</div>
          <div class="type">插画创作习作</div>
          <div class="time">20天前</div>
        </div>
        <div class="work">
          <img class="img" src="../res/work3.bmp" alt="" />
          <div class="name">赛博朋克系</div>
          <div class="type">插画创作习作</div>
          <div class="time">27天前</div>
        </div>
        <div class="work">
          <img class="img" src="../res/work4.bmp" alt="" />
          <div class="name">花象年华 文创设计</div>
          <div class="type">平面-品牌</div>
          <div class="time">32天前</div>
        </div>
        <div class="work">
          <img class="img" src="../res/work5.bmp" alt="" />
          <div class="name">小年-年文化插画设计</div>
          <div class="type">儿童插画</div>
          <div class="time">43天前</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.deatil_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100vw;
  .header {
    width: 100%;
    height: 150px;
    background: #c54646;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    .infos {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .info {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }
  }
  .info {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;
    .head {
      border-radius: 100%;
      width: 40%;
    }
    .name {
      margin: 5px;
      font-size: 15px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #000000;
    }
    .id {
      margin: 5px;
      font-size: 10px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #a3a3a3;
    }
    .btns {
      margin: 5px;
      .btn {
        width: 80px;
        font-size: 13px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: left;
        color: #000000;
        border: 1px solid #e7e7e7;
        border-radius: 10px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      }
    }
  }
  .detail_options {
    margin-top: 20px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .option {
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: auto;
      margin: auto;
      color: #a3a3a3;
    }
  }
  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .information {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .work {
        margin: 20px;
        width: 20%;
        display: flex;
        flex-direction: column;
        border: 1px solid #ffffff;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        .img {
          width: 100%;
          border: 1px solid #ffffff;
          border-radius: 10px 10px 0px 0px;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        }
        .name {
          font-size: 15px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #383838;
        }
        .type {
          font-size: 10px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #a3a3a3;
        }
        .time {
          margin-top: 10px;
          font-size: 10px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
        }
      }
    }
  }
}
.active {
  background: #c54646 !important;
  color: white !important;
}
.chosen {
  border-bottom: 1px solid red;
  color: black !important;
}
</style>
