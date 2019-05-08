<template>
  <div>
    <apexchart type="area" height="400" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
export default {
  name: "HistoryChart",
  props: {
    priceData: Array
  },
  data: function() {
    return {
      series: [
        {
          name: "鸡蛋价格（元/公斤）",
          data: []
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
      }
    };
  },
  watch: {
    priceData: function() {
      var arr = new Array()
      this.priceData.forEach(v => arr.push([v.date, v.price]))
      this.series = [{
        name: "鸡蛋价格（元/公斤）",
        data: arr
      }]
    }
  }
};
</script>
