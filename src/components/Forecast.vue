<template>
  <div>
    <div :style="sectionBlockStyle">
      <h1>价格预测</h1>
      <p>使用EEMD-LSTM模型构建方法，构建鸡蛋价格预测模型，对未来一天价格进行预测。</p>
    </div>

    <div class="section-seperator"></div>
    <div :style="sectionBlockStyle">
      <a-spin :spinning="isLoadingTasks">
        <ForecastTable :tasks="tasks"/>
      </a-spin>
    </div>
  </div>
</template>

<script>
import ForecastTable from './ForecastTable.vue'

export default {
  name: "Forecast",
  components: {
    ForecastTable
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      },
      tasks: [],
      isLoadingTasks: false
    }
  },
  mounted: function() {
    this.isLoadingTasks = true
    fetch("http://api.jiagejiance.com/api/get_forecast_tasks.php")
      .then(response => response.json())
      .then(json => this.tasks = json)
      .then(() => this.isLoadingTasks = false)
  }
}
</script>

