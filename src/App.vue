<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        :collapse="is_collapse">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>JSON Schema</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="goPath">form</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
      <el-button type="primary" style="float: left" @click="is_collapse = !is_collapse">{{ is_collapse ? "展开" : "折叠" }}</el-button>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router"

const is_collapse = ref(false)

const router = useRouter()

const goPath: () => void = () => {
  router.push({
    path: "JSON-Schema/JSON-form"
  })
}
</script>

<style lang="scss">
body {
  margin: 0 8px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-menu {
  height: 90vh;
  overflow-y: scroll;
}

.el-main {
  --el-main-padding: 0px !important;
  flex: initial !important;
}
</style>
