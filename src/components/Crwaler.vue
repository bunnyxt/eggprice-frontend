<template>
  <div>
    <div :style="sectionBlockStyle">
      <h1>爬虫调度</h1>
      <p>展示从<a href="http://www.cnjidan.com/jiage" target="_blank">鸡蛋价格网</a>上爬取数据的爬虫的工作情况。该爬虫每十分钟运行一次，检查该网站是否有新的数据更新，并将新数据爬取下来，经过处理后存入本系统的数据库中。</p>
    </div>

    <div class="section-seperator"></div>
    <div :style="sectionBlockStyle">
      <a-spin :spinning="isLoadingTasks">
        <CrwalerTable :tasks="tasks"/>
      </a-spin>
    </div>
  </div>
</template>

<script>
import CrwalerTable from './CrwalerTable.vue'

export default {
  name: "Crwaler",
  components: {
    CrwalerTable
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#FFF",
        padding: "24px"
      },
      tasks: [],
      isLoadingTasks: false
    }
  },
  mounted: function() {
    this.isLoadingTasks = true
    fetch("http://api.jiagejiance.com/api/get_crwal_tasks.php")
      .then(response => response.json())
      .then(json => this.tasks = json)
      .then(() => this.isLoadingTasks = false)
  }
}
</script>
