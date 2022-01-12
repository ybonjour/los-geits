<template>
  <div class="container">
    <div class="selection"><slot name="selection" /></div>
    <div class="detail"><slot name="detail" /></div>
  </div>
</template>
<script lang="ts">
export default {
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.selection, .detail {
  padding: 1em;
}
.detail {
  flex-grow: 1;
}
</style>
