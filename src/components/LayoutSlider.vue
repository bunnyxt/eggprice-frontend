<template>
  <a-layout-sider
    breakpoint="lg"
    collapsedWidth="0"
  >
    <div style="margin: 16px" @click="handleLogoClick()">
      <img src="/logo.png" style="width:32px; height:32px;"/>
      <span style="color:rgb(255,255,255,0.65); margin-left: 8px; font-size:14px">鸡蛋价格监测</span>
    </div>
    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1" @click="handleHistoryClick()">
        <a-icon type="line-chart" />
        <span class="nav-text">历史价格</span>
      </a-menu-item>
      <a-menu-item key="2" @click="handleForecastClick()">
        <a-icon type="money-collect" />
        <span class="nav-text">价格预测</span>
      </a-menu-item>
      <a-menu-item key="3" @click="handleCrwalerClick()">
        <a-icon type="code" />
        <span class="nav-text">爬虫调度</span>
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
    },
    handleForecastClick: function () {
      this.$router.push("/forecast");
    },
    handleCrwalerClick: function () {
      this.$router.push("/crwaler");
    }
  }
}
</script>
