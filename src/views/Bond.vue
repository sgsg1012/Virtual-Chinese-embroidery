<style></style>

<template>
  <div class="mainContainer">
    <div class="title">
      <img
        src="/ret.png"
        @click="this.$router.push({ path: '/enterpriseDetail', query: { id: this.$route.query['id'] } })"
        style="width: 36px;height: 36px;margin-right: 1.19vw;cursor: pointer;"
      />
      <span>{{showData.issuer}}债券详情</span>
    </div>
    <div class="detailContainer">
      <div class="leftBox">
        <div class="detailView">
          <div style="height: 10.8%; display: flex; margin-bottom: 2rem">
            <img class="iconBox" src="/icon_brief.png" />
            <span class="iconText">发行单位</span>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column">
            <div style="display: flex">
              <div style="display: flex; flex-direction: column">
                <span style="white-space: nowrap" class="briefText">债券名称</span>
                <span
                  style="
                    font-size: 1.6rem;
                    font-family: source-han-sans-simplified-c, sans-serif;
                    white-space: nowrap;
                  "
                >{{showData.bond_name}}</span>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  padding-left: 3rem;
                "
              >
                <span style="white-space: nowrap" class="briefText">代码</span>
                <span
                  style="
                    font-size: 1.6rem;
                    font-family: source-han-sans-simplified-c, sans-serif;
                    white-space: nowrap;
                  "
                >{{showData.bond_code}}</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; padding-top: 1rem">
              <span style="white-space: nowrap" class="briefText">到期日</span>
              <span
                style="
                  font-size: 1.6rem;
                  font-family: source-han-sans-simplified-c, sans-serif;
                  white-space: nowrap;
                "
              >{{showData.due_date}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div
          class="scoreBox"
          style="cursor: pointer;"
          @click="this.$router.push({ path: '/bondDetail', query: { id: this.$route.query['id'],code:this.$route.query['code'] } })"
        >
          <span class="textScore">{{parseInt(showData.ESG)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as echarts from "echarts";
import "echarts-liquidfill";
export default {
  setup() { },
  data() {
    return {
      showData: {

      }
    };
  },
  mounted() {
    
    axios.get('http://139.159.241.200:8066/%5Ebond/?format=json&bondcode=' + this.$route.query['code']).then((res) => {
      this.$data.showData = res.data[0];
    });
  },

};
</script>
<style scoped>
.scoreBox {
  background-image: url(/BondScore.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 30rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textScore {
  font-size: 11rem;
  text-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
  font-weight: 900;
  margin-bottom: 3rem;
  color: rgb(76, 241, 170);
}
.credit {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 100%;
}
.esg_val {
  position: relative;
  margin: auto;
  width: 80%;
  height: 100%;
  background-image: url(/Bond1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.val {
  position: absolute;
  left: 47.5%;
  top: 46%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.e_val {
  position: absolute;
  left: 47%;
  top: 7%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.s_val {
  position: absolute;
  left: 12%;
  top: 68%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
.g_val {
  position: absolute;
  left: 86%;
  top: 71%;
  width: 22px;
  height: 53px;
  color: rgba(93, 109, 121, 1);
  font-size: 30px;
}
#WaterPolo {
  width: 100%;
  height: 100%;
}
.tabviewContainer {
  display: flex;
  flex: 1;
  border-radius: 0px 0px 1.5rem 1.5rem;
  background-color: #fff;
}
.tabItem {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(93, 109, 121, 1);
  cursor: pointer;
}
.tabItem svg {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  fill: rgba(93, 109, 121, 1);
}
.tabItemActive {
  border-radius: 1.5rem 1.5rem 0px 0px;
  background-color: #fff;
  color: rgba(0, 165, 189, 1);
}
.tabItemActive svg {
  fill: rgba(0, 165, 189, 1);
}

.rightBox {
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.briefText {
  font-family: source-han-sans-simplified-c, sans-serif;
  font-size: 0.8rem;
  color: rgba(93, 109, 121, 1);
}
.iconText {
  padding-top: 3px;
  font-size: 1rem;
  padding-left: 0.625rem;
  font-family: source-han-sans-simplified-c, sans-serif;
}
.mainContainer {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  flex: 1;
  max-height: 100%;
  background-color: rgba(0, 165, 189, 0.05);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
}
.iconBox {
  width: auto;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 10px rgba(0, 165, 189, 0.2);
  border-radius: 6px;
  padding: 5px 5px 5px 5px;
}
.title {
  margin-left: 2rem;
  padding-top: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: rgba(0, 165, 189, 1);
  letter-spacing: 2px;
  font-size: 24px;
  font-family: source-han-sans-simplified-c, sans-serif;
  display: flex;
  align-items: center;
}

.detailContainer {
  flex: 1;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
}
.leftBox {
  max-width: 32.8%;
  display: flex;
  flex-direction: column;
}
.detailView {
  border-radius: 24px;
  background-color: #fff;
  width: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 38%;
}
.scoreView {
  height: 50%;
  border-radius: 24px;
  background-color: #fff;
  width: 100%;
  margin-top: 1.2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
