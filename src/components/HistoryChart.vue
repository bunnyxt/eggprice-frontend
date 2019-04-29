<template>
  <div>
    <a-cascader :options="options" placeholder="请选择地区" v-model="value"/>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "HistoryChart",
  data: function() {
    return {
      value: '',
      options: []
    };
  },
  mounted: function() {
    fetch("http://api.bunnyxt.com/eggprice/api/get_location_option.php")
      .then(response => response.json())
      .then(json => this.options = json)
  }
};
</script>
