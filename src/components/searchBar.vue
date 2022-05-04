<template>
  <div class="search_bar">
    <el-autocomplete
      style="width: 100%; margin-right: 30px"
      v-model="input_data"
      :fetch-suggestions="querySearch"
      @select="handleSelect"
      :placeholder="placeholder"
      class="input"
      clearable
    ></el-autocomplete>
    <el-button
      type="primary"
      class="search_btn"
      @click="$emit('search', input_data)"
    >
      <slot>搜索</slot>
    </el-button>
  </div>
</template>

<script lang="ts">
interface data {
  value: string;
  link: string;
}
import { defineComponent } from "vue";
export default defineComponent({
  name: "searchBar",
  data() {
    return {
      input_data: "",
      data: [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" },
      ],
    };
  },
  methods: {
    querySearch(queryString, cb) {
      const results = this.data;
      cb(results);
    },
    handleSelect(item) {
      console.log(item.value);
    },
  },
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
  .search_btn {
    width: 100px;
    background-color: rgba(0, 165, 189, 1);
  }
}
</style>
