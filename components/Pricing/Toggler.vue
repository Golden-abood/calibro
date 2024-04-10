<template>
  <div
    class="mx-auto flex justify-around overflow-hidden bg-black relative w-80 h-[72px] border-solid border-[1px] mt-6 border-white rounded-[20px] !items-center"
  >
    <div
      class="py-1 px-4 absolute bg-primary w-[45%] h-[70%] cursor-pointer rounded-[20px] transition-all duration-800"
      :class="active ? ' left-[4%] ' : 'left-[52%] '"
    ></div>
    <span
      class="inline-block relative text-white font-bold cursor-pointer text-center text-base"
      @click="changePrice(true)"
      >Monthly</span
    >
    <span
      class="inline-block relative text-white font-bold text-center cursor-pointer text-base"
      @click="active = changePrice(false)"
      >Yearly</span
    >
  </div>
</template>

<script setup lang="ts">
const active = ref(true)

const emit = defineEmits()
const changePrice = newValue => {
  active.value = newValue
  emit('changePrice', newValue)
}
</script>

<style scoped></style>
