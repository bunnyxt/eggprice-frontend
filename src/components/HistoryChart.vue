<template>
  <div>
    <a-spin :spinning="isLoadingOption">
      <a-cascader :options="options" placeholder="请选择地区" v-model="value"/>
    </a-spin>
    <a-spin :spinning="isLoadingPriceData">
      <apexchart type="area" height="400" :options="chartOptions" :series="series"/>
    </a-spin>
  </div>
</template>

<script>
export default {
  name: "HistoryChart",
  data: function() {
    return {
      value: [],
      options: [],
      priceData: [],
      series: [
      {
        data: null
      }
      ],
      chartOptions: {
        chart: {
          toolbar: {
            tools: {
              download: false,
            },
          },
          zoom: {
            type: "xy"
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          //min: this.latest_time - 7 * 24 * 60 * 60 * 1000,
          tickAmount: 6,
          labels: {
            rotate: 0
          }
        },
        yaxis: {
          labels: {
            show: true
          }
        },
        tooltip: {
          x: {
            format: "yyyy-MM-dd"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      },
      isLoadingOption: false,
      isLoadingPriceData: false
    };
  },
  watch: {
    value: function() {
      this.isLoadingPriceData = true
      fetch("http://api.bunnyxt.com/eggprice/api/get_price_data.php?province="+this.value[0]+"&city="+this.value[1]+"&country="+this.value[2])
        .then(response => response.json())
        .then(json => this.priceData = json)
        .then(() => {
          var arr = new Array()
          this.priceData.forEach(v => arr.push([v.date, v.price]))
          this.series = [{
            name: "鸡蛋价格",
            data: arr
          }]
        })
        .then(() => this.isLoadingPriceData = false)
    }
  },
  mounted: function() {
    this.isLoadingOption = true
    fetch("http://api.bunnyxt.com/eggprice/api/get_location_option.php")
      .then(response => response.json())
      .then(json => this.options = json)
      .then(() => this.isLoadingOption = false)
  }
};
</script>
