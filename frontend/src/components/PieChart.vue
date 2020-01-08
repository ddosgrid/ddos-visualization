<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: 'Doughnut',
  props: [ 'url' ],
  mounted: async function () {
    var response = await fetch(this.url)
    var parsedResponse = await response.json()
    this.renderChart(parsedResponse.piechart)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
