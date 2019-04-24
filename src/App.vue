<template>
  <a-layout id="components-layout-demo-responsive"  style="min-height:100%">
    <layout-slider />
    <a-layout>
      <layout-header />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="sectionBlockStyle">
          content
        </div>
      </a-layout-content>
      <div class="fake-footer"></div>
      <layout-footer />
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutSlider from './components/LayoutSlider.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'

export default {
  name: 'app',
  components: {
    LayoutSlider,
    LayoutFooter,
    LayoutHeader
  },
  data: function() {
    return {
      sectionBlockStyle: {
        background: "#fff",
        padding: "24px"
      },
    }
  }
}
</script>

<style>
.fake-footer {
  height: 100px
}
.section-seperator {
  height: 24px;
}
</style>