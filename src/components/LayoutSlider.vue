<template>
  <a-layout-sider
    breakpoint="lg"
    collapsedWidth="0"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1" @click="handleHistoryClick()">
        <a-icon type="user" />
        <span class="nav-text">历史价格</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span class="nav-text">nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span class="nav-text">nav 3</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="user" />
        <span class="nav-text">nav 4</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "LayoutSlider",
  methods: {
    handleHistoryClick: function () {
      this.$router.push("/history");
    }
  }
}
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>