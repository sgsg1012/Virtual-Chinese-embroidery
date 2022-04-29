<style>
</style>

<template>
  <div class="mainContainer">
    <div class="title">
      <img
        src="/ret.png"
        @click="this.$router.push({ path: '/search' })"
        style="width: 36px;height: 36px;margin-right: 1.19vw;cursor: pointer;"
      />
      <span>{{showData.name}}行业详情</span>
    </div>
    <div class="detailContainer">
      <div class="leftBox">
        <div class="detailView">
          <div style="height: 10.8%;display: flex;margin-bottom: 19px;">
            <img class="iconBox" src="/icon_brief.png" />
            <span class="iconText">行业简介</span>
          </div>
          <div style="flex:1;display: flex;flex-direction: column;">
            <div style="display: flex;flex-direction: column;margin-right: 2.5%;">
              <span style="white-space: nowrap;" class="briefText">主要公司</span>
              <span
                style="font-size: 1rem;font-family: source-han-sans-simplified-c, sans-serif;"
              >{{showData.main_com}}</span>
            </div>
            <div
              class="briefText"
              style="flex: 1;height: 100%;"
            >{{showData.main_com_intro}}</div>
          </div>
        </div>
        <div class="scoreView">
          <div style="height: 1.5rem;display: flex;">
            <img class="iconBox" src="/icon_score.png" />
            <span class="iconText">ESG指数</span>
          </div>
          <div style="flex:1;display: flex;">
            <div id="myChart" :style="{ width: '100%', height: '100%', flex: '1' }"></div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div style="height: 1.5rem;display: flex;">
          <img class="iconBox" src="/icon_score.png" />
          <span class="iconText">
            打分细则
            <span class="briefText" style="padding-left: 2.5rem;">
              <br />鼠标悬停环形区域可查看具体分数
            </span>
          </span>
        </div>
        <div></div>
        <div style="flex: 1;padding-top: 3rem;" id="myChartPie2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import * as echarts from 'echarts'
export default {
  setup() {
  },
  data() {
    return {
      showData:{
        name:'',
        main_com:'',
        main_com_intro:'',
        esg:8,
        gyjz:8,
        yggl:8,
        sydd:8,
        gszl:8,
        hjpl:8
      },
      myChart: null,
      retData: [{ "id": "3", "industry": "制药", "main_com": "爱尔眼科", "intro_of_com": "爱尔眼科医院集团股份有限公司于2003年1月24日在湖南省工商行政管理局登记成立。法定代表人陈邦，公司经营范围包括眼科医院的投资和医院经营管理服务（不得从事吸收存款、集资收款、受托贷款、发行票据、发放贷款等国家金融监管及财政信用业务）等", "gyjjz": "16.0067", "hjpl": "24.2", "gszl": "16.1667", "sydd": "25.7", "yggl": "49.9667", "esg": "501.905" }],
    };
  },
  mounted() {
    axios.get('http://139.159.241.200:8066/%5Edetail/?format=json&id='+ this.$route.query['id']).then((res) => {
      this.$data.retData = res.data;
      this.makeData();
      this.draw();
    });
  },
  methods: {
    makeData(){
      this.$data.showData.name = this.$data.retData[0]['industry'];
      this.$data.showData.main_com = this.$data.retData[0]['main_com'];
      this.$data.showData.main_com_intro = this.$data.retData[0]['intro_of_com'];
      this.$data.showData.esg = parseFloat(this.$data.retData[0]['esg']).toFixed(1);
      this.$data.showData.gyjz = (parseFloat(this.$data.retData[0]['gyjjz'])/5.4).toFixed(2);
      this.$data.showData.yggl = (parseFloat(this.$data.retData[0]['yggl'])/12.7).toFixed(2);
      this.$data.showData.sydd = (parseFloat(this.$data.retData[0]['sydd'])/9.6).toFixed(2);
      this.$data.showData.hjpl = (parseFloat(this.$data.retData[0]['hjpl']) / 22.4).toFixed(2);
      this.$data.showData.gszl = (parseFloat(this.$data.retData[0]['gszl']) / 5.8).toFixed(2);
    },
    draw() {
      let option = {
        color: "rgba(70, 219, 242, 1)",
        tooltip: {},
        legend: {
          icon: "circle",
          left: 10,
          top: 25,
          data: ['ESG指数']
        },

        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: 'rgba(149, 163, 175, 1)',
            }
          },
          indicator: [
            { name: '员工管理', max: 10 },
            { name: '商业道德', max: 10 },
            { name: '公司治理', max: 10 },
            { name: '公益捐赠', max: 10 },
            { name: '环境披露', max: 10 },
          ]
        },
        series: [{
          type: 'radar',
          // areaStyle: {normal: {}},
          lineStyle: {
            width: 2,
            color: 'rgba(70, 219, 242, 1)'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(70, 219, 242, 0.1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(70, 219, 242, 1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }

          },
          data: [
            {
              value: [this.$data.showData.yggl, this.$data.showData.sydd, this.$data.showData.gszl, this.$data.showData.gyjz, this.$data.showData.hjpl],
              name: 'ESG指数'
            }
          ]
        }]
      };
      document.getElementById('myChart').setAttribute('_echarts_instance_', '')
      document.getElementById('myChartPie2').setAttribute('_echarts_instance_', '')
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      myChart.resize();
      var myChart1 = echarts.init(document.getElementById('myChartPie2'));
      let option1 = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          /*formatter:function(val){   //让series 中的文字进行换行
               console.log(val);//查看val属性，可根据里边属性自定义内容
               var content = var['name'];
               return content;//返回可以含有html中标签
           },*/ //自定义鼠标悬浮交互信息提示，鼠标放在饼状图上时触发事件
        },//提示框，鼠标悬浮交互时的信息提示

        series: [
          {
            name: 'ESG指数',//tooltip提示框中显示内容
            type: 'pie',//图形类型，如饼状图，柱状图等
            radius: ['60%', '75%'],//饼图的半径，数组的第一项是内半径，第二项是外半径。支持百分比，本例设置成环形图。具体可以看文档或改变其值试一试
            //roseType:'area',是否显示成南丁格尔图，默认false

            itemStyle: {
              normal: {
                labelLine: {
                  show: true,
                  lineStyle: { color: 'rgba(0, 165, 189, 1)' }
                },
                shadowBlur: 10,
                shadowColor: 'rgba(0, 165, 189, 0.3)',
                shadowOffsetX: 0,
                shadowOffsetY: 0
              },//基本样式
            },
            label: {
              show: true,
              textStyle: { fontSize: "2rem", color: "rgba(0, 165, 189, 1)" },
              formatter: '{name|{c}}\n\n{time|{b}}',
              minMargin: 5,
              edgeDistance: 50,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: '1rem',
                  color: 'rgba(0, 165, 189, 1)'
                }
              }
            },//
            data: [
              { value: this.$data.showData.gyjz, name: '公益及捐赠' },
              { value: this.$data.showData.hjpl, name: '环境披露' },
              { value: this.$data.showData.yggl, name: '员工管理' },
              { value: this.$data.showData.sydd, name: '商业道德' },
              { value: this.$data.showData.gszl, name: '公司治理' },
            ],//数据，数据中其他属性，查阅文档
            color: ['rgba(255, 136, 0, 1)', 'rgba(43, 213, 240, 1)', 'rgba(6, 194, 112, 1)', 'rgba(255, 230, 0, 1)', 'rgba(62, 123, 250, 1)'],//各个区域颜色
          },//数组中一个{}元素，一个图，以此可以做出环形图
        ],//系列列表
      };
      myChart1.setOption(option1);

    }
  }
};
</script>
<style scoped>
.rightBox {
  padding-left: 5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  min-width: 25%;
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
