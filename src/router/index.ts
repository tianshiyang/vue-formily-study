import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import JSONSchema from "./JSON-Schema"

const routes: Array<RouteRecordRaw> = [
  ...JSONSchema
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
