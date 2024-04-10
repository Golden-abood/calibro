<template>
  <a
    :class="
      active
        ? 'bg-white xl:h-[180px] md:h-[220px] sm:h-[270px] h-[300px]'
        : 'bg-secondary'
    "
    class="block cursor-pointer w-full px-11 py-10 rounded-3xl h-[110px] duration-500"
    @click="active = !active"
  >
    <div class="flex justify-between items-center">
      <BaseTitle
        :title="question?.title"
        class="!text-darken font-bold text-2xl"
      />

      <NuxtImg v-if="active === false" width="20" src="/images/plus.svg" />

      <span v-else class="h-1 w-5 bg-darken"></span>
    </div>

    <div
      class="transition-all duration-300 md:duration-500"
      :class="active ? 'opacity-100 visible ' : 'opacity-0 invisible'"
    >
      <BaseParagraphText class="ms-2 !text-darken mt-6" :text="question.text" />
    </div>
  </a>
</template>
<script setup lang="ts">
const active = ref(false)
defineProps({
  question: { type: Object, required: true }
})
</script>

<style scoped>
.plus {
  transform: rotate(90deg);
}

.minus {
  transform: rotate(0deg);
}
</style>
