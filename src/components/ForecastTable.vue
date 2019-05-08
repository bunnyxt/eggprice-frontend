<template>
  <a-table :columns="columns"
    :rowKey="r => r.id"
    :dataSource="tasks"
  >
    <template slot="detailRender" slot-scope="id">
      <a :href="'/forecast/'+id">预测详情</a>
    </template>
    <template slot="floatRender" slot-scope="data">
      {{ data.toFixed(2) }}
    </template>
  </a-table>
</template>

<script>
export default {
  name: "ForecastTable",
  props: {
    tasks: Array
  },
  data: function() {
    return {
      columns: [{
        title: '预测id',
        dataIndex: 'id'
      }, {
        title: '预测地点',
        dataIndex: 'location_name'
      },{
        title: '预测日期',
        dataIndex: 'forecast_date'
      }, {
        title: '预测价格（元/公斤）',
        dataIndex: 'forecast_price',
        scopedSlots: { customRender: 'floatRender' }
      }, {
        title: '查看详情',
        dataIndex: 'id',
        scopedSlots: { customRender: 'detailRender' }
      }],
    }
  }
}
</script>
