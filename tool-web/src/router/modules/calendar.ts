import Layout from "@/layout/MyLayout.vue";

export default [
  {
    path: "/calendar",
    name: "calendar",
    component: Layout,
    children: [
      {
        path: "/calendar",
        icon: "el-icon-date",
        component: () => import("@/views/main/Main.vue"),
        name: "calendar.calendarName",
        meta: {
          rules: [3, 5, 7],
        },
      },
    ],
  },
];
