<template>
  <div class="topBar" :class="hasShadow ? 'topBarShadow':''">
    <div class="title">
      <img v-bind:src="hasShadow ? './ESG_Blue.png' :'./ESG.png'" alt="ESG" />
      <div :class="titleClass">ESG评估系统</div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        v-bind:background-color="bgColor"
        v-bind:text-color="textColor"
        active-text-color="rgba(70, 219, 242, 1)"
        @select="this.handleSelect"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/search">ESG评估</el-menu-item>
        <el-menu-item index="/literature">相关文献</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import "../css/font.css";
export default {
  name: "topBar",
  data() {
    return {
      textColor:'#fff',
      bgColor:'#679faa',
      titleClass:'text',
      hasShadow:false,
      activeIndex:'/'
    };
  },
  watch:{
  $route(to,from){
    const whiteList = ['/industryDetail','/enterpriseDetail','/bondDetail','/bond','/supplyChain']
    if(whiteList.includes(to.path)){
      //this.$data.containerStyle.background = '#FFF'
      //console.log(to.path)
      this.$data.textColor = '#000';
      this.$data.bgColor = '#fff';
      this.$data.titleClass = 'textBlue';
      this.$data.hasShadow = true;
      this.$data.activeIndex = '/search';
      //console.log(this.$data)
    }else{
      this.$data.textColor = '#fff';
      this.$data.bgColor = '#679faa';
      this.$data.titleClass = 'text';
      this.$data.hasShadow = false;
    }
  }
},
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key,keyPath);
      //   console.log(this.$route.path);
    },
  },
  computed: {
    // 计算属性的 getter
  },

};
</script>
<style lang="less" scoped>
.topBarShadow{
  box-shadow: -5px 3px 10px rgba(242, 251, 252, 1);
  background: #ffffff !important;
}

.topBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: #ffffff66;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 20;
    img {
      width: 5.6vw;
      height: 2.76vw;
      margin-right: 2.08vw;
      margin-left: 2.08vw;
    }
    .text {
      font-size: 16px;
      font-family: "庞门";
      color: rgba(255, 255, 255, 1);
      letter-spacing: 2px;
    }

    .textBlue{
      font-size: 16px;
      font-family: "庞门";
      color: rgba(0, 165, 189, 1);
      letter-spacing: 2px;
    }
  }
  .menu {
    flex-grow: 1;
    .el-menu-demo {
      border-bottom: none;
      text-decoration: none;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0);
      .el-menu-item {
        margin-right: 50px;
        font-family: source-han-sans-simplified-c, sans-serif;
        font-weight: 400;
        font-style: normal;
      }
    }
  }
}
</style>
