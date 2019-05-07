<template>
  <a-table :columns="columns"
    :rowKey="r => r.id"
    :dataSource="tasks"
  >
    <template slot="dateRender" slot-scope="ts">
      {{ formatDate(ts) }}
    </template>
    <template slot="statusRender" slot-scope="status">
      <div v-if="status == 'crwaling'">
        <span style="color: blue">正在运行</span>
      </div>
      <div v-else-if="status == 'finished'">
        <span style="color: green">运行完成</span>
      </div>
      <div v-else>
        {{ status }}
      </div>
    </template>
  </a-table>
</template>

<script>
export default {
  name: "CrwalerTable",
  props: {
    tasks: Array
  },
  data: function() {
    return {
      columns: [{
        title: '任务id',
        dataIndex: 'id'
      }, {
        title: '开始时间',
        dataIndex: 'start_time',
        scopedSlots: { customRender: 'dateRender' }
      }, {
        title: '结束时间',
        dataIndex: 'end_time',
        scopedSlots: { customRender: 'dateRender' }
      }, {
        title: '最新url_id',
        dataIndex: 'latest_url_id'
      }, {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: { customRender: 'statusRender'}
      }],
    }
  },
  methods: {
    formatDate: function(ts) {
      var date = new Date(ts * 1000)
      return (
        date.getFullYear() + "-" + 
        (date.getMonth()+1) + "-" + 
        date.getDate() + " " + 
        (date.getHours()<10?"0"+date.getHours():date.getHours()) + ":" + 
        (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()) + ":" + 
        (date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds())
      )
    }
  }
}
</script>
