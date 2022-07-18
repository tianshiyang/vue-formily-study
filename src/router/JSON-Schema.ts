import { RouteRecordRaw } from "vue-router";

const JSONSchema: Array<RouteRecordRaw> = [
  {
    path: "/JSON-Schema",
    name: "JSONSchema",
    children: [{
      path: "JSON-form",
      name: "JSONForm",
      component: () => import("@/views/JSON-Schema/form.vue")
    }]
  }
];

export default JSONSchema;
