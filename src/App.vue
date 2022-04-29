<script setup>
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div v-bind:class=containerClass style="overflow-x: hidden;">
    <header class="header">
      <TopBar />
    </header>
    <main style="flex: 1;flex-direction: column;display: flex;max-height: calc(100% - 3.75vw);">
      <router-view />
    </main>
  </div>
</template>
<style lang="less">
body {
  margin: 0;
  min-width: 1080px;
}
.container {
  height: 100vh;
  background: url("./res/background.jpg");
  background-size: cover;
  background-attachment: fixed;
  min-width: 1080px;
  min-height: 600px;
}
.containerWhite {
  height: 100vh;
  background: #fff;
  min-width: 1080px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
}
.header {
  min-height: 3.75vw;
  min-width: 1080px;
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
<script>
export default {
  setup() {
    
  },
  data() {
    return {
      containerClass:'container'
    };
  },
  watch:{
  $route(to,from){
    const whiteList = ['/industryDetail','/enterpriseDetail','/bondDetail','/bond','/supplyChain']
    if(whiteList.includes(to.path)){
      this.$data.containerClass = 'containerWhite'
    }else{
      this.$data.containerClass = 'container'
    }
  }
},
};
</script>