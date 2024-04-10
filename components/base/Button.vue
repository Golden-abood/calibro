<template>
  <div>
    <button
      class="text-center font-bold py-4 px-10 rounded-xl relative"
      :class="block ? 'w-full' : ''"
      :style="{ backgroundColor: bgColor }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
  bgColor: { type: String, default: 'white ' },
  block: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped></style>
