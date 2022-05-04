<template>
  <div class="page">
    <div class="options">
      <div class="option chosen">
        <div>设计师</div>
      </div>
    </div>
    <div class="screen">
      <div class="title" style="margin-left: 140px; margin-right: 20px">
        筛选：
      </div>
      <div class="factor">
        <div>领域</div>
        <img class="img" src="./../res/down.jpg" alt="" />
      </div>
      <div class="factor">
        <div>经验</div>
        <img class="img" src="./../res/down.jpg" alt="" />
      </div>
      <div class="factor">
        <div>地区</div>
        <img class="img" src="./../res/down.jpg" alt="" />
      </div>
    </div>
    <div class="content">
      <div class="user" @click="$router.push({ path: '/user_detail' })">
        <div class="second">
          <div class="img">
            <img class="image" src="../res/user1.jpg" alt="" />
          </div>
          <div class="info">
            <div class="name">Starlet斯塔雷特</div>
            <div class="job">插画设计师</div>
            <div class="fans">创作110|粉丝16416</div>
            <div class="id">ID:11280322</div>
            <el-button class="btn">关注</el-button>
          </div>
        </div>
        <div class="opus">
          <img class="opu" src="../res/user11.bmp" alt="" />
          <img class="opu" src="../res/user12.bmp" alt="" />
          <img class="opu" src="../res/user13.bmp" alt="" />
          <div class="deng">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="second">
          <div class="img">
            <img class="image" src="../res/user2.jpg" alt="" />
          </div>
          <div class="info">
            <div class="name">Simon</div>
            <div class="job">自由工作者</div>
            <div class="fans">创作52|粉丝26817</div>
            <div class="id">ID:11290322</div>
            <el-button class="btn">关注</el-button>
          </div>
        </div>
        <div class="opus">
          <img class="opu" src="../res/user21.bmp" alt="" />
          <img class="opu" src="../res/user22.bmp" alt="" />
          <img class="opu" src="../res/user23.bmp" alt="" />
          <div class="deng">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
        </div>
      </div>
      <div class="user">
        <div class="second">
          <div class="img">
            <img class="image" src="../res/user3.bmp" alt="" />
          </div>
          <div class="info">
            <div class="name">Jackson11</div>
            <div class="job">设计师</div>
            <div class="fans">创作666|粉丝114514</div>
            <div class="id">ID:90291288</div>
            <el-button class="btn">关注</el-button>
          </div>
        </div>
        <div class="opus">
          <img class="opu" src="../res/user31.bmp" alt="" />
          <img class="opu" src="../res/user32.bmp" alt="" />
          <img class="opu" src="../res/user33.png" alt="" />
          <div class="deng">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 90vh;
  .options {
    width: 100%;
    height: 80px;
    border: 1px solid #d2d2d2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .option {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: auto;
      margin: auto;
    }
  }
  .screen {
    width: 100%;
    height: 80px;
    border: 1px solid #d2d2d2;
    display: flex;
    flex-direction: row;
    align-items: center;
    .factor {
      display: flex;
      flex-direction: row;
      margin-left: 20px;
      .img {
        height: 15px;
        margin-top: 7px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .user {
      width: 80%;
      margin: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border: 1px solid #ffffff;
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      .second {
        display: flex;
        flex-direction: row;
        .img {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .image {
            border-radius: 100%;
            width: 100px;
          }
        }
        .info {
          margin: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name {
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Heavy;
            font-weight: 800;
            text-align: left;
            color: #000000;
          }
          .job {
            font-size: 12px;
            font-family: PingFang SC, PingFang SC-Heavy;
            font-weight: 800;
            text-align: left;
            color: #a3a3a3;
          }
          .fans {
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            letter-spacing: 2px;
            text-align: left;
            color: #000000;
          }
          .id {
            font-size: 18px;
            font-family: PingFang SC, PingFang SC-Bold;
            font-weight: 700;
            text-align: left;
            color: #a3a3a3;
          }
          .btn {
            width: 100px;
            background: #c54646;
            border: 1px solid #c54646;
            border-radius: 10px;
            color: white;
          }
        }
      }
      .opus {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .opu {
          width: 150px;
          height: 100px;
          overflow: hidden;
          border-radius: 10px;
          margin: 20px;
        }
        .deng {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-weight: bold;
        }
      }
    }
  }
}
.chosen {
  border-bottom: 1px solid red;
}
</style>
