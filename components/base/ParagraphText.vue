<template>
  <p class="font-normal text-white opacity-[0.87]">{{ text }}</p>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
});
</script>

<style scoped></style>
