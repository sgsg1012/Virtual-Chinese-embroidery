import Home from "./views/Home.vue";
import esg_evaluation from "./views/evaluation.vue";
import literature from "./views/literature.vue";
import search from "./views/Search.vue";
import enterpriseDetail from "./views/EnterpriseDetail.vue";
import industryDetail from "./views/IndustryDetail.vue";
import notFound from "./views/test/NotFound.vue";
import bondDetail from "./views/BondDetail.vue";
import bond from "./views/Bond.vue";
import supplyChain from "./views/SupplyChain.vue";
/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/evaluation",
    component: esg_evaluation,
    meta: { title: "esg_eva" },
  },
  {
    path: "/literature",
    component: literature,
    meta: { title: "literature" },
  },
  {
    path: "/enterpriseDetail",
    component: enterpriseDetail,
    meta: { title: "enterpriseDetail" },
  },
  {
    path: "/industryDetail",
    component: industryDetail,
    meta: { title: "industryDetail" },
  },
  {
    path: "/search",
    component: search,
    meta: { title: "search" },
  },
  {
    path: "/notFound",
    component: notFound,
    meta: { title: "notFound" },
  },
  {
    path: "/bondDetail",
    component: bondDetail,
    meta: { title: "bondDetail" },
  },
  {
    path: "/bond",
    component: bond,
    meta: { title: "bond" },
  },
  {
    path:"/supplyChain",
    component: supplyChain,
    meta: { title: "supplyChain" },
  }
];
