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
let jsonstr='{"namelist": [["\u534e\u6da6", "HK01109"], ["\u5b9d\u9f99", "HK01238"], ["\u78a7\u6842\u56ed", "HK02007"], ["\u9f99\u6e56", "HK00960"], ["\u7f8e\u7684\u7f6e\u4e1a", "HK03990"], ["\u6052\u9686", "HK00101"], ["\u7eff\u5730", "SH600606"], ["\u878d\u521b\u4e2d\u56fd", "HK01918"], ["\u4e16\u8302", "HK00813"], ["\u4e2d\u9a8f", "HK01966"], ["soho\u4e2d\u570b", "HK00410"], ["\u5efa\u4e1a", "HK00832"], ["\u6052\u5927", "HK03333"], ["\u7eff\u57ce", "HK03900"], ["\u8fdc\u6d0b\u5730\u4ea7", "HK03377"], ["\u4fe1\u548c\u5730\u4ea7", "HK00083"], ["\u65b0\u9e3f\u57fa\u5730\u4ea7", "HK00016"], ["\u592a\u53e4\u5730\u4ea7", "HK01972"], ["\u4e5d\u9f99\u4ed3", "HK00004"], ["\u6052\u57fa", "HK00012"], ["\u5bcc\u529b\u5730\u4ea7", "HK02777"], ["\u4fdd\u5229", "SH600048"], ["\u5f53\u4ee3", "HK01107"], ["\u8fea\u9a6c", "SH600565"], ["\u5609\u91cc\u5efa\u8bbe", "HK00683"], ["\u91d1\u8302", "HK00817"], ["\u9f99\u5149", "HK03380"], ["\u4e07\u79d1", "HK00604"], ["\u62db\u5546\u86c7\u53e3", "SZ000002"], ["\u6df1\u5733\u63a7\u80a1", "SZ001979"], ["\u5e7f\u53d1\u8bc1\u5238", "SH600999"], ["\u56fd\u6cf0\u541b\u5b89", "SH600030"], ["\u6d77\u901a\u8bc1\u5238", "SH601788"], ["\u534e\u6cf0\u8bc1\u5238", "SZ000166"], ["\u4e2d\u56fd\u5e73\u5b89", "SH601881"], ["\u4e2d\u56fd\u4eba\u5bff", "SH600958"], ["\u65b0\u534e\u4fdd\u9669", "SH601995"], ["\u592a\u5e73\u6d0b\u4fdd\u9669", "HK02799"], ["\u56fd\u91d1\u8bc1\u5238", "SH601456"], ["\u56fd\u6d77\u8bc1\u5238", "HK01375"], ["\u4e2d\u4fe1\u94f6\u884c", "SH601998"], ["\u4e2d\u56fd\u94f6\u884c", "SH601988"], ["\u5de5\u5546\u94f6\u884c", "SH601398"], ["\u5efa\u8bbe\u94f6\u884c", "SH601939"], ["\u519c\u4e1a\u94f6\u884c", "SH601288"], ["\u62db\u5546\u94f6\u884c", "SH600036"], ["\u4e2d\u56fd\u4eba\u6c11\u4fdd\u9669", "SH601319"], ["\u5174\u4e1a\u8bc1\u5238", "SH601377"], ["\u534e\u590f\u94f6\u884c", "SH600015"], ["\u90ae\u50a8\u94f6\u884c", "SH601658"], ["\u62db\u5546\u8bc1\u5238", "SZ000776"], ["\u4e2d\u4fe1\u8bc1\u5238", "SH601211"], ["\u5149\u5927\u8bc1\u5238", "SH600837"], ["\u7533\u4e07\u5b8f\u6e90", "SH601688"], ["\u4e2d\u56fd\u94f6\u6cb3", "SH601318"], ["\u4e1c\u65b9\u8bc1\u5238", "SH601628"], ["\u4e2d\u91d1\u516c\u53f8", "SH601336"], ["\u4e2d\u56fd\u534e\u878d", "SH601099"], ["\u56fd\u8054\u8bc1\u5238", "SH600109"], ["\u4e2d\u5dde\u8bc1\u5238", "SZ000750"], ["\u7231\u5c14\u773c\u79d1", "SZ300015"], ["\u767d\u4e91\u5c71", "SH600332"], ["\u535a\u817e\u80a1\u4efd", "SZ300363"], ["\u590d\u661f\u533b\u836f", "SH600196"], ["\u56fd\u9645\u533b\u5b66", "SZ000516"], ["\u6d77\u5c14\u751f\u7269", "SH688139"], ["\u6d77\u6b63\u836f\u4e1a", "SH600267"], ["\u534e\u6da6\u4e09\u4e5d", "SZ000999"], ["\u534e\u6da6\u53cc\u9e64", "SH600062"], ["\u5409\u6797\u6556\u4e1c", "SZ000623"], ["\u5065\u5eb7\u5143", "SH600380"], ["\u5065\u6c11\u96c6\u56e2", "SH600976"], ["\u541b\u5b9e\u751f\u7269", "SH688180"], ["\u5eb7\u5f18\u836f\u4e1a", "SZ002773"], ["\u5eb7\u7f18\u836f\u4e1a", "SH600557"], ["\u79d1\u4f26\u836f\u4e1a", "SZ002422"], ["\u8fc8\u514b\u751f\u7269", "SZ300463"], ["\u8fc8\u745e\u533b\u7597", "SZ300760"], ["\u5947\u6b63\u85cf\u836f", "SZ002287"], ["\u4eba\u798f\u533b\u836f", "SH600079"], ["\u4e0a\u6d77\u533b\u836f", "SH601607"], ["\u901a\u7b56\u533b\u7597", "SH600763"], ["\u6c83\u68ee\u751f\u7269", "SZ300142"], ["\u73b0\u4ee3\u5236\u836f", "SH600420"], ["\u65b0\u548c\u6210", "SZ002001"], ["\u65b0\u534e\u5236\u836f", "SZ000756"], ["\u5fc3\u8109\u533b\u7597", "SH688016"], ["\u4e9a\u5b9d\u836f\u4e1a", "SH600351"], ["\u836f\u660e\u5eb7\u5fb7", "SH603259"], ["\u4f50\u529b\u836f\u4e1a", "SZ300181"]]}';
let jsonobj = JSON.parse(jsonstr);
console.log(jsonobj);
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
      let results = [];
      for(let i of jsonobj['namelist']){
        if(i[0].includes(queryString) || i[1].includes(queryString)){
          results.push({
            value:i[0]+" "+i[1],
            link:'',
            code:i[1]
          });
        }
      }
      console.log(results);
      cb(results);
    },
    handleSelect(item) {
      this.$router.push({path:'/enterpriseDetail',query:{id:item.code}})
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
    height: 3.125vw;
    min-height: 33.75px;
  }

  /deep/ .el-input__inner {
    height: 3.125vw;
    min-height: 33.75px;
  }
}
</style>
