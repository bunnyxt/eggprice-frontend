<template>
  <div>
    <div :style="sectionBlockStyle">
      <h1>历史价格</h1>
      <a-spin :spinning="isLoadingOption">
        <a-cascader :options="options" placeholder="请选择地区" v-model="value"/>
      </a-spin>
    </div>

    <div v-if="value.length == 3">
      <div class="section-seperator"></div>
      <div :style="sectionBlockStyle">
        <a-spin :spinning="isLoadingPriceData">
          <HistoryChart :priceData="priceData"/>
        </a-spin>
      </div>

      <div class="section-seperator"></div>
      <div :style="sectionBlockStyle">
        <a-spin :spinning="isLoadingPriceData">
          <HistoryTable :priceData="priceData"/>
        </a-spin>
      </div>
    </div>

  </div>
</template>

<script>
import HistoryChart from './HistoryChart.vue'
import HistoryTable from './HistoryTable.vue'

export default {
  name: "History",
  components: {
      HistoryChart,
      HistoryTable
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      },
      value: [],
      options: [],
      priceData: [],
      isLoadingOption: false,
      isLoadingPriceData: false,
    }
  },
  mounted: function() {
    this.isLoadingOption = true
    fetch("http://api.jiagejiance.com/api/get_location_option.php")
      .then(response => response.json())
      .then(json => this.options = json)
      .then(() => this.isLoadingOption = false)
  },
  watch: {
    value: function() {
      this.isLoadingPriceData = true
      fetch("http://api.jiagejiance.com/api/get_price_data.php?province="+this.value[0]+"&city="+this.value[1]+"&country="+this.value[2])
        .then(response => response.json())
        .then(json => this.priceData = json)
        .then(() => this.isLoadingPriceData = false)
    }
  }
}
</script>

<style>
.ant-cascader-input.ant-input {
    width: 250px;
}
</style>
