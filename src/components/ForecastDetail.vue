<template>
  <div>
    <div :style="sectionBlockStyle">
      <h1>价格预测详情{{ this.$route.params.id }}</h1>
      <a-spin :spinning="isLoadingTask">
        <p>预测地点：{{ forecastTask.location_name }}</p>
        <p>预测时间：{{ forecastTask.forecast_date }}</p>
        <p>预测价格：<strong>{{ forecastTask.forecast_price.toFixed(2) }}</strong>元/公斤</p>
        <p>RMSE：{{ forecastTask.RMSE }}</p>
        <p>MAPE：{{ forecastTask.MAPE }}</p>
      </a-spin>
    </div>

    <div class="section-seperator"></div>
    <div :style="sectionBlockStyle">
      <h1>历史预测比较</h1>
      <a-spin :spinning="isLoadingRecords">
        <ForecastDetailChart :records="forecastRecords"/>
      </a-spin>
    </div>
  </div>
</template>

<script>
import ForecastDetailChart from "./ForecastDetailChart.vue"

export default {
  name: "ForecastDetail",
  components: {
    ForecastDetailChart
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      },
      forecastTask: {
        location_name: '',
        forecast_date: '',
        forecast_price: 0.0,
        RMSE: 0.0,
        MAPE: 0.0
      },
      forecastRecords: [],
      isLoadingTask: false,
      isLoadingRecords: false
    }
  },
  mounted: function() {
    this.isLoadingTask = true
    fetch("http://api.jiagejiance.com/api/get_forecast_task.php?forecast_id="+this.$route.params.id)
      .then(response => response.json())
      .then(json => this.forecastTask = json)
      .then(() => this.isLoadingTask = false)

    this.isLoadingRecords = true
    fetch("http://api.jiagejiance.com/api/get_forecast_record.php?forecast_id="+this.$route.params.id)
      .then(response => response.json())
      .then(json => this.forecastRecords = json)
      .then(() => this.isLoadingRecords = false)
  }
}
</script>

