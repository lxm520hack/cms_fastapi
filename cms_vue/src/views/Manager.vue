<template>
  <div>
    <div style="height: 60px; background-color: #eae8e8; display: flex; align-items: center; border-bottom: 1px solid #c4c2c2">
      <div style="flex: 1">
        <div style="padding-left: 20px; display: flex; align-items: center">
          <img src="../assets/vue.svg" alt="" style="width: 40px">
          <div style="font-weight: bold; font-size: 24px; margin-left: 5px">学生信息管理系统</div>
        </div>
      </div>
      <div style="width: fit-content; padding-right: 10px; display: flex; align-items: center;">
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" style="width: 40px; height: 40px">
        <span style="margin-left: 5px">管理员</span>
      </div>
    </div>

    <div style="display: flex">
      <div style="width: 200px; border-right: 1px solid #f3eeee; min-height: calc(100vh - 60px)">
        <el-menu
            router
            style="border: none"
            :default-active="$route.path"
            :default-openeds="['/home']"
        >
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>系统首页</span>
          </el-menu-item>
          <el-menu-item index="/person">
            <el-icon><User /></el-icon>
            <span>个人资料</span>
          </el-menu-item>
          <el-menu-item index="login" @click="logout">
            <el-icon><SwitchButton /></el-icon>
            <span>退出系统</span>
          </el-menu-item>
        </el-menu>
      </div>

      <div style="flex: 1; width: 0; background-color: #eaeaee; padding: 10px">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
console.log($route.path)

const logout = () => {
  localStorage.removeItem('student-user')
}
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #c3d7d3 !important;
}
.el-menu-item:hover {
  color: #0c98d5;
}
:deep(th)  {
  color: #333;
}
</style>