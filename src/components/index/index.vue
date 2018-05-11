<template>
 <div class="calculator-wrap">
  <h4>{{title}}</h4>
  <div class="calculator-content">
    <CalShow  :show-data="showData"/>
    <div class="cal-list" >
      <CalItem  v-for="(item,index) in calData"
      :key="index"
      :item-data="item"
      @click.native="calculatorClick(item)"
       />
    </div>
  </div>
</div>
</template>

<script src="./index.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
@import "./index.less";
</style>
