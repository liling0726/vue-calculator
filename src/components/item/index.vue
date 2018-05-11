
<template>
<div class="list-item"
 :class="{'border-none':itemData.value==='0','bg-yellow':itemData.bgColor==='yellow'}">
 {{itemData.name}}
</div>
</template>

<script src="./index.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
@import "./index.less";
</style>
