<template>
  <div :style="sectionBlockStyle">
    <h1>历史价格</h1>
    <HistoryChart />
  </div>
</template>

<script>
import HistoryChart from './HistoryChart.vue'

export default {
  name: "History",
  components: {
      HistoryChart
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      },
    }
  }
}
</script>
