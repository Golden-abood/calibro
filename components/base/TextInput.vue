<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="bg-transparent opacity-80 p-4 text-white text-base font-normal border-b-[1px] border-b-solid border-b-white focus:outline-none"
  />
</template>

<script setup lang="ts">
defineProps({
  placeholder: { type: String, required: true }
})
</script>

<style scoped></style>
