import Layout from "@/layout/MyLayout.vue";

export default [
  {
    path: "/bot",
    name: "bot.botName",
    component: Layout,
    children: [
      {
        path: "/bot",
        component: () => import("@/views/main/Main.vue"),
        name: "bot.botList",
        meta: {
          rules: [1],
        },
      },
      {
        path: "/bot2",
        component: () => import("@/views/main/Main.vue"),
        name: "bot.botList2",
        meta: {
          rules: [2, 3, 5, 7],
        },
      },
    ],
  },
];
