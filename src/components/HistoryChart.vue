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
      options: [ // TODO get options from api
        {
          value: "辽宁",
          label: "辽宁",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "山东",
          label: "山东",
          children: [
          ]
        }
      ]
    };
  }
};
</script>
