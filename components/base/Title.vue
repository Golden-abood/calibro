<template>
  <div :class="active ? 'active ' : ''" class="text-white font-bold">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  active: { type: Boolean, default: false },
});
</script>

<style scoped>
.active {
  background: linear-gradient(54deg, #ffd5a6 15.02%, #ec912a 82.83%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
