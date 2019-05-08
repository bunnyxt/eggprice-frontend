<template>
  <div>
    <div :style="sectionBlockStyle">
      <a-carousel autoplay>
        <div @click="handleHistoryClick()">
          <h1><a-icon type="line-chart" /> 历史价格</h1>
          <p>各地区历史鸡蛋价格查询</p>
        </div>
        <div @click="handleForecastClick()">
          <h1><a-icon type="money-collect" /> 价格预测</h1>
          <p>查看价格预测结果</p>
        </div>
        <div @click="handleCrwalerClick()">
          <h1><a-icon type="code" /> 爬虫调度</h1>
          <p>查看鸡蛋价格爬虫调度信息</p>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      }
    }
  },
  methods: {
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

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 200px;
  line-height: 200px; */
  padding: 32px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h1 {
  color: #fff;
}

.ant-carousel >>> .slick-slide p {
  color: #fff;
}
</style>