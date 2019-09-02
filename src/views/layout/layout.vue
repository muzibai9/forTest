<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item>
            <i class="el-icon-s-platform"></i>
          </el-menu-item>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="4"></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="handleOpen"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">测试</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      if (keyPath[0] == "2") {
        this.$router.push({ name: "lv" });
      } else {
        
      }
    }
  }
};
</script>
<style>
.el-container {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  padding: 0;
  z-index: 1000;
}

/* header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>)*/
.el-header .fr {
  float: right;
}
.el-header .el-menu {
  border-bottom: none;
}
.el-aside,
.el-main {
  padding-top: 60px;
}
.el-aside {
  background: #545c64;
}
.el-aside .el-menu {
  border-right: none;
}
.el-header .el-menu-item {
  float: right;
}
</style>