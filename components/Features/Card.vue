<template>
  <div
    class="border-primary border-[1px] border-solid rounded-[22px]"
    :class="index != 0 ? 'py-6 px-6' : 'py-12 px-7'"
  >
    <NuxtImg :src="feature.photo" class="mx-auto pb-3 w-full relative z-50" />
    <div class="mt-3">
      <BaseTitle
        class="pb-3 relative z-50"
        :title="feature.title"
        :class="index === 0 ? ' text-xl md:text-3xl' : 'text-xl'"
      />
      <BaseParagraphText
        v-for="item in feature.body"
        :text="item"
        class="ms-5 text-base relative z-50 before:absolute before:content-[''] before:top-3 before:-left-4 before:w-1 before:h-1 before:rounded-full before:bg-white"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  feature: { type: Object, required: true },
  index: { type: Number, required: true }
})
</script>

<style scoped></style>
