<!--
 * @Author: tangzhicheng
 * @Date: 2021-03-23 20:02:16
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-29 15:49:57
 * @Description: file content
-->
<template>
  <div class="about">
    <div id="container"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'About',
  data() {
    return {
      barChart: null
    }
  },
  mounted() {
    this.barChart = new Chart({
      container: 'container',
      width: 600,
      height: 300
    })

    console.log(this.barChart)

    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 }
    ]

    this.barChart.data(data)
    this.barChart.scale('sales', {
      nice: true
    })
    this.barChart.tooltip({
      showMarkers: false
    })
    this.barChart.interaction('active-region')
    this.barChart.interval().position('year*sales')
    this.barChart.render()
  }
}
</script>
