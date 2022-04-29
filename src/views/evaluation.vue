<style></style>

<template>
  <div>ESG评估</div>
</template>
<script>
import axios from "axios";
export default {
  setup() {
    axios.get("/api/getUsers").then((res) => {
      console.log(res.data);
    });
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
