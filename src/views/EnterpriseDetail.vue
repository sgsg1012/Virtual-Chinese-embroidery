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
      <span>{{showData.name}}ESG详情</span>
    </div>
    <div class="detailContainer">
      <div class="leftBox">
        <div class="detailView">
          <div style="display: flex;margin-bottom: 19px;">
            <img class="iconBox" src="/icon_brief.png" />
            <span class="iconText">公司简介</span>
          </div>
          <div style="flex:1;display: flex;flex-direction: column;">
            <div class="width:100%">
              <div style="display: flex;flex-direction: column;margin-right: 2.5%;">
                <span style="white-space: nowrap;" class="briefText">股票代码</span>
                <span
                  style="font-size: 2rem;font-family: source-han-sans-simplified-c, sans-serif;"
                >{{showData.code}}</span>
              </div>
              <div
                class="briefText"
                style="flex: 1;height: 100%;"
              >{{showData.gsjj}}</div>
            </div>
          </div>
          <div style="display: flex;padding-top: 0.6rem;">
            <el-button
              v-for="i in showData.bondList"
              style="font-size: 0.8rem;font-family: source-han-sans-simplified-c, sans-serif;"
              type="primary"
              round
              @click="$router.push({ path: '/bond', query: { id: this.$route.query['id'],code:i } })"
            >查看债券{{i}}</el-button>
            <el-button type="info" @click="$router.push({ path: '/supplyChain', query: { id: this.$route.query['id'],name: showData.name} })" style="font-size: 0.8rem;font-family: source-han-sans-simplified-c, sans-serif;" round>查看供应链</el-button>
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
        <div style="flex: 1;padding-top: 3rem;" id="myChartPie"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import * as echarts from 'echarts'
let bondCodes = {
  'HK01109':['088022','098079'],
  'HK00960':['102001358'],
  'SH600196':['102002201','102100178'],
  'HK00813':['102100936'],
  'HK03900':['102200088'],
  'SH601318':['1723002'],
  'HK00960':['1780014']
}
export default {
  setup() {
  },
  data() {
    return {
      retdata: [
        {
          "stockcode": {
            "stockcode": "SH600606",
            "company": "绿地",
            "year": 2020.0,
            "esg": 461.05,
            "hjg_policy": 8.0,
            "hjgl_object": 8.0,
            "hjgl_system": 4.0,
            "hjpl_water": 3.0,
            "hjpl_electricity": 1.0,
            "hjpl_fuel": 1.0,
            "hjpl_solidwaste_harmful_field": 1.0,
            "hjpl_solidwaste_innocuity_field": 1.0,
            "hjpl_co2": 3.0,
            "negative_events": 10.0,
            "gyjz_time": 4.0,
            "gyjz_number": null,
            "gyjz_money": 6.0,
            "gyjz_anti_epidemic": 7.0,
            "gyjz_poverty_relief": 8.0,
            "yggl_pay": 6.0,
            "yggl_training_cost": 4.0,
            "yggl_training_time": 4.0,
            "yggl_policy": 6.0,
            "yggl_benefit": 7.0,
            "yggl_turnover_rate": "5",
            "yggl_male_female": 6.0,
            "yggl_male_female": 5.0,
            "yggl_foreign_employees": 4.0,
            "yggl_age_distribution": 5.0,
            "gyl_esg": 4.0,
            "gyl_manger": 4.0,
            "shfm_employee": 3.0,
            "shfm_supply_chains": 3.0,
            "shfm_client": 3.0,
            "sydd_anti_corruption_train": "5",
            "sydd_reporting_system": 3.0,
            "sydd_tax_transparency": 10.0,
            "sydd_disclosure": 1.0,
            "gszl_independent_director": 7.0,
            "gszl_executive_pay": 4.0,
            "gszl_variety": 6.0,
            "fusj_govern": 3.0,
            "jgbm_esg": 3.0
          },
          "field_company": "绿地",
          "year": 2020.0,
          "esg": 461.05,
          "hjpl_water": null,
          "hjpl_electricity": null,
          "hjpl_fuel": null,
          "hjpl_co2": null,
          "gyjz_time": null,
          "gyjz_number": null,
          "gyjz_money": null,
          "yggl_pay": "1356842.33",
          "yggl_training_cost": null,
          "yggl_training_time": null,
          "yggl_turnover_rate": null,
          "yggl_male_female": 1.3,
          "sydd_anti_corruption_number": null,
          "sydd_anti_corruption_train": null,
          "gszl_independent_executive": "0.171527778",
          "gszl_male_female": "0.376388889",
          "gsjj": "绿地控股集团有限公司(简称绿地或绿地集团)，公司成立于1992年7月18日，是中国市场化改革浪潮中诞生的代表性企业之一。从2000万元注册资本起步，经过28年的持续成长，已形成了“以房地产、基建为主业，金融、消费、健康、科创等产业协同发展”的综合经营格局"
        }
      ],
      showData: {
        hjpl: 8,
        yggl: 8,
        gszl: 8,
        gyjz: 8,
        sydd: 8,
        total: 8,
        name: '',
        code:'',
        gsjj:'',
        bondList:[]
      },
    };
  },
  mounted() {
    
    axios.get('http://139.159.241.200:8066/%5Ecomp/?format=json&stockcode='+ this.$route.query['id']).then((res) => {
      this.$data.retdata = res.data;
      this.makeData(this.$data.retdata[0]['stockcode']);
      this.draw();
    });
    

  },
  methods: {
    makeData(data) {
      let hjpl = data['hjpl_water'] * 2.2 + data['hjpl_electricity'] * 2.2 + data['hjpl_fuel'] * 2.2;
      hjpl = hjpl + data['hjpl_solidwaste_harmful_field'] * 1.8 + data['hjpl_co2'] * 12;
      hjpl = hjpl / (2.2 * 3 + 1.8 + 12);
      let yggl = data['yggl_pay'] * 1.5 + data['yggl_training_cost'] * 1.3 + data['yggl_training_time'] * 1.3;
      yggl = yggl + data['yggl_policy'] * 3.3 + data['yggl_benefit'] * 1.3 + parseFloat(data['yggl_turnover_rate']) * 0.8;
      yggl = yggl + data['yggl_male_female'] * 0.8 + data['yggl_male_female'] * 0.8 + data['yggl_foreign_employees'] * 0.8 + data['yggl_age_distribution'] * 0.8;
      yggl = yggl / (1.5 + 1.3 * 3 + 3.3 + 0.8 * 5);
      let gszl = data['gszl_independent_director'] * 1.8 + data['gszl_executive_pay'] * 2.2 + data['gszl_variety'] * 1.8;
      gszl = gszl / (1.8 + 2.2 + 1.8);
      let gyjz = data['gyjz_time'] * 1.4 + data['gyjz_money'] * 1.4 + data['gyjz_anti_epidemic'] * 0.9 + data['gyjz_poverty_relief'] * 1.7;
      gyjz = gyjz / (1.4 + 1.4 + 0.9 + 1.7);
      let sydd = parseFloat(data['sydd_anti_corruption_train']) * 2.25 + data['sydd_reporting_system'] * 2.25 + data['sydd_tax_transparency'] * 2.25 + data['sydd_disclosure'] * 2.85;
      sydd = sydd / (2.25 * 3 + 2.85);
      this.$data.showData.hjpl = hjpl.toFixed(2);
      this.$data.showData.yggl = yggl.toFixed(2);
      this.$data.showData.gszl = gszl.toFixed(2);
      this.$data.showData.gyjz = gyjz.toFixed(2);
      this.$data.showData.sydd = sydd.toFixed(2);
      let total = hjpl * (2.2 * 3 + 1.8 + 12) + yggl * (1.5 + 1.3 * 3 + 3.3 + 0.8 * 5) + gszl * (1.8 + 2.2 + 1.8) + gyjz * (1.4 + 1.4 + 0.9 + 1.7) + sydd * (2.25 * 3 + 2.85);
      total = total / (2.2 * 3 + 1.8 + 12 + 1.5 + 1.3 * 3 + 3.3 + 0.8 * 5 + 1.8 + 2.2 + 1.8 + 1.4 + 1.4 + 0.9 + 1.7 + 2.25 * 3 + 2.85);
      this.$data.showData.total = total.toFixed(1);
      this.$data.showData.name = this.$data.retdata[0]['field_company'];
      this.$data.showData.gsjj = this.$data.retdata[0]['gsjj'];
      this.$data.showData.code = this.$route.query['id'];
      if(bondCodes[this.$route.query['id']]){
        this.$data.showData.bondList = bondCodes[this.$route.query['id']];
      }
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
      document.getElementById('myChartPie').setAttribute('_echarts_instance_', '')
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      myChart.resize();
      var myChart1 = echarts.init(document.getElementById('myChartPie'));
      let option1 = {
        tooltip: {
          trigger: 'item',
          formatter: (p) => {
            let labelText = [];
            let keyText = [];
            switch (p['name']) {
              case '公益及捐赠':
                labelText = ['gyjz_time', 'gyjz_money', 'gyjz_anti_epidemic', 'gyjz_poverty_relief'];
                keyText = ['社会志愿服务时长/人次', '公益捐赠额度', '抗疫投入', '扶贫投入'];
                break;
              case '员工管理':
                labelText = ['yggl_pay', 'yggl_training_cost', 'yggl_training_time', 'yggl_policy','yggl_benefit','yggl_turnover_rate','yggl_male_female','yggl_age_distribution'];
                keyText = ['员工薪酬', '员工培训总投入', '员工培训时长（人均）', '员工劳动政策','员工福利','员工流失率','员工男女薪酬比','年龄分层比'];
                break;
              case '商业道德':
                labelText = ['sydd_anti_corruption_train', 'sydd_reporting_system', 'sydd_tax_transparency', 'sydd_disclosure'];
                keyText = ['反腐败（诉讼、培训）', '举报制度（渠道）', '纳税透明度（评级）', '信息披露度（评级）'];
                break;
              case '公司治理':
                labelText = ['gszl_independent_director', 'gszl_executive_pay', 'gszl_variety'];
                keyText = ['董事会独立性（独立董事占比）', '高管薪酬', '董事会多样性'];
                break;
              case '环境披露':
                labelText = ['hjpl_water', 'hjpl_electricity', 'hjpl_fuel', 'hjpl_solidwaste_harmful_field','hjpl_solidwaste_innocuity_field','hjpl_co2'];
                keyText = ['每万元产值用水量', '每万元产值用电量', '每万元产值燃料用量', '固体废弃物（有害）','固体废弃物（无害）','每万元产值CO2排放（吨）'];
                break;

              default:
                break;
            }
            let retText = '';
            for(let i in labelText){
              if(this.$data.retdata[0][labelText[i]]){
                retText = retText + keyText[i] +" :  "+this.$data.retdata[0][labelText[i]] + "  - 评分 : "+this.$data.retdata[0]['stockcode'][labelText[i]]+"<br/>";
              }else{
                retText = retText + keyText[i] + "     - 评分 : "+this.$data.retdata[0]['stockcode'][labelText[i]]+"<br/>";
              }
              
            }
            return retText
          },
          /*formatter:function(val){   //让series 中的文字进行换行
               console.log(val);//查看val属性，可根据里边属性自定义内容
               var content = var['name'];
               return content;//返回可以含有html中标签
           },*/ //自定义鼠标悬浮交互信息提示，鼠标放在饼状图上时触发事件
        },//提示框，鼠标悬浮交互时的信息提示
        graphic: [ //为环形图中间添加文字
          {
            type: "text",
            left: "center",
            top: "40%",
            style: {
              text: this.$data.showData.total.toString(),
              textAlign: "center",
              fill: "#000",
              fontSize: '6rem',
            },
          }],

        series: [
          {
            name: '用户统计',//tooltip提示框中显示内容
            type: 'pie',//图形类型，如饼状图，柱状图等
            radius: ['50%', '65%'],//饼图的半径，数组的第一项是内半径，第二项是外半径。支持百分比，本例设置成环形图。具体可以看文档或改变其值试一试
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
              formatter: '\n\n{name|{c}}\n\n{time|{b}}',
              minMargin: 20,
              edgeDistance: 25,
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
}
.scoreView {
  height: 16rem;
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
