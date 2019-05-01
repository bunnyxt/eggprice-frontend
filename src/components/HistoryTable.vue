<template>
  <a-table :columns="columns"
    :rowKey="r => r.id"
    :dataSource="priceDataFiltered"
  >
  </a-table>
</template>

<script>
export default {
  name: "HistoryTable",
  props: {
    priceData: Array
  },
  data: function() {
    return {
      columns: [{
        title: '日期',
        dataIndex: 'date',
        width: '120px'
      }, {
        title: '价格（单位：元/公斤）',
        dataIndex: 'price',
        width: '40%'
      }],
    }
  },
  computed: {
    priceDataFiltered: function() {
      return this.priceData.reverse()
    }
  }
}
</script>
