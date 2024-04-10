<template>
  <div :style="gradientStyle" class="gradient-area" />
</template>

<script setup lang="ts">
const props = defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true }
})

const gradientStyle = computed(() => ({
  left: `${props.x}px`,
  top: `${props.y}px`
}))
</script>

<style scoped>
.gradient-area {
  @apply absolute shadow-point blur-3xl;
}
</style>
