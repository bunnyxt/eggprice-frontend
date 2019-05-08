<template>
  <apexchart type="line" height="400" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: "ForecastDetailChart",
  props: {
    records: Array
  },
  data: function() {
    return {
      series: [
        {
          name: "实际价格（元/公斤）",
          data: []
        },
        {
          name: "预测价格（元/公斤）",
          data: []
        },
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
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shadeIntensity: 1,
        //     opacityFrom: 0.7,
        //     opacityTo: 0.9,
        //     stops: [0, 100]
        //   }
        // }
      }
    }
  },
  watch: {
    records: function() {
      var trueArr = new Array()
      var foreArr = new Array()
      this.records.forEach(v => {
        var date = new Date(v.date).getTime()
        trueArr.push([date, v.true_price])
        foreArr.push([date, v.forecast_price])
      })
      this.series = [{
        name: "实际价格（元/公斤）",
        data: trueArr
      }, {
        name: "预测价格（元/公斤）",
        data: foreArr
      }]
    }
  }
}
</script>
