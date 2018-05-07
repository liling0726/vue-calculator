<template>
 <div class="calculator-wrap">
{{title}}
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
      msg: '计算器demo'
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
