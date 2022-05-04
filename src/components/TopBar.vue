<template>
  <div class="topBar" :class="hasShadow ? 'topBarShadow' : ''">
    <div class="title">
      <div class="text" @click="this.$router.push({ path: '/' })">
        那些花儿-汉绣非遗
      </div>
    </div>
    <div class="searchBar">
      <searchBar class="search" placeholder="按城市、地址搜索" @search="search"
        >搜索</searchBar
      >
    </div>
    <div class="menu">
      <div class="language" style="margin: 20px">简体中文</div>
      <div class="date" style="margin: 20px">
        {{
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
        }}
      </div>
      <div class="week" style="margin: 20px">
        {{ this.weeks[new Date().getDay()] }}
      </div>
      <el-button
        type="text"
        class="user"
        style="margin: 20px; color: white"
        @click="this.$router.push({ path: '/user' })"
      >
        <img src="/src/res/user.jpg" style="border-radius: 100%" alt="" />
      </el-button>
    </div>
  </div>
</template>

<script>
import "../css/font.css";
import searchBar from "../components/searchBar2.vue";
export default {
  name: "topBar",
  data() {
    return {
      textColor: "#fff",
      bgColor: "#679faa",
      titleClass: "text",
      hasShadow: false,
      activeIndex: "/",
      weeks: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
    };
  },
  components: {
    searchBar,
  },
  watch: {},
  methods: {
    search(data) {
      console.log(data);
    },
  },
  computed: {
    // 计算属性的 getter
  },
};
</script>
<style lang="less" scoped>
.topBarShadow {
  //   box-shadow: -5px 3px 10px rgba(242, 251, 252, 1);
  background: #c54646 !important;
}

.topBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: #c54646;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    .text {
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 2px;
      margin: 30px;
    }
  }
  .searchBar {
    flex-grow: 20;
    margin-right: 200px;
    margin-top: auto;
    margin-bottom: auto;
    .search {
      width: 400px;
    }
    // margin: auto;
  }
  .menu {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
    margin: 30px;
  }
}
</style>
