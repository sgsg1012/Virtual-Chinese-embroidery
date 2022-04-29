<template>
  <div class="home_page">
    <div class="title">
      <div class="text">ESG评估系统</div>
    </div>
    <div class="search_bar">
      <searchBar placeholder="请输入企业名称或股票代码" @search="search"
        >查询</searchBar
      >
    </div>
  </div>
</template>
<script>
import "../css/font.css";
import axios from "axios";
import searchBar from "../components/searchBar.vue";
import { ElMessage } from 'element-plus';

export default {
  setup() {

  },
  data() {
    return {};
  },
  components: {
    searchBar,
  },
  methods: {
    search(data) {
      if(data!=''){
        this.$router.push({path:'/search',query:{queryStr: data}});
      }else{
        this.$router.push({path:'/search'});
      }
    },
  },
};
</script>
<style lang="less" scoped>
.home_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      align-content: center;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 6px;
      font-size: 72px;
      font-family: "庞门";
    }
  }
  .search_bar {
    width: 60vw;
  }

}
</style>
