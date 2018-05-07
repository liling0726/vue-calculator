<template>
 <div class="calculator-wrap">
{{msg}}
<CalShow />
<CalItem/>
 </div>
</template>

<script>
import CalItem from './CalItem.vue'
import CalShow from './CalShow.vue'
export default {
  name: 'calculator',
  components: {
    CalItem,
    CalShow
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator-wrap {
  border: 1px solid #eee;
  border-radius: 20rpx;
  width: 400px;
}
</style>
