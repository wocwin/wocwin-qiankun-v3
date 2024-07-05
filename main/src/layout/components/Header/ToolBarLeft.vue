<template>
  <div class="tool-bar-lf">
    <CollapseIcon id="collapseIcon" />
  </div>
</template>

<script setup lang="ts">
import CollapseIcon from "./components/CollapseIcon.vue";
</script>

<style scoped lang="scss">
.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
</style>
