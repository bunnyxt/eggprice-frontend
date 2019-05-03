<template>
  <a-layout-sider
    breakpoint="lg"
    collapsedWidth="0"
  >
    <div style="margin: 16px" @click="handleLogoClick()">
      <img src="/logo.png" style="width:32px; height:32px;"/>
      <span style="color:rgb(255,255,255,0.65); margin-left: 8px; font-size:14px">鸡蛋价格监测</span>
    </div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
      <a-menu-item key="1" @click="handleHistoryClick()">
        <a-icon type="line-chart" />
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
    handleLogoClick: function () {
      this.$router.push("/");
    },
    handleHistoryClick: function () {
      this.$router.push("/history");
    }
  }
}
</script>
