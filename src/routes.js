import Home from "./views/Home.vue";
import User from "./views/user.vue";
import Color from "./views/color.vue";
import Pattern from "./views/pattern.vue";
import Detail from "./views/detail.vue";
import UserDetail from "./views/user_detail.vue";

export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/user", component: User, meta: { title: "User" } },
  { path: "/color", component: Color, meta: { title: "Color" } },
  { path: "/pattern", component: Pattern, meta: { title: "Pattern" } },
  { path: "/detail", component: Detail, meta: { title: "Detail" } },
  {
    path: "/user_detail",
    component: UserDetail,
    meta: { title: "UserDetail" },
  },
];
