<template>
  <div class="search_bar">
    <input :placeholder="placeholder" class="input" />
    <img class="icon" src="./../res/search.jpg" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "searchBar",
  data() {
    return {
      input_data: "",
    };
  },
  methods: {},
  props: ["placeholder"],
  emits: ["search"],
});
</script>
<style lang="less" scoped>
.search_bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  position: relative;
  /deep/ .input {
    width: 100%;
    margin-right: 30px;
    height: 30px;
    border-radius: 100px;
    outline: none;
    border: none;
    //   background: url("./../res/search.jpg") no-repeat;
    background-position: left;
    background-origin: content-box;
    text-indent: 35px;
  }
  .icon {
    position: absolute;
    left: 4%;
    width: 5%;
  }
}
</style>
