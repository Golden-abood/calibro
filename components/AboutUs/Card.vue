<template>
  <!--bg-gradient-to-t from-[rgba(236, 145, 42, 0.20)] from-[-32.36%] via-[rgba(236, 145, 42, 0.00)] via-[92.04%] to-white to-100%-->
  <div
    v-for="(item, index) in items"
    class="py-12 gradient text-center md:text-start px-20 relative"
  >
    <NuxtImg
      class="absolute w-16"
      :class="index === 0 ? 'top-7 left-10' : 'top-3 left-11 md:left-5'"
      src="/images/About/Highlight-05.svg"
    />
    <BaseTitle
      :title="item.title"
      class="text-2xl !text-primary"
      :class="index === 0 ? 'text-center' : 'md:text-start'"
    />
    <BaseParagraphText
      :text="item.text"
      class="mx-auto text-lg leading-8 !text-[#030301] pt-2 !font-medium"
    />
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: 'Why CalibroAI?',
    text: 'At CalibroAI, we are a dedicated team of engineers and scientists who have collectively accumulated years of experience working with leading companies in the Manufacturing, Medical, Chemical, Finance and Tech industries. Throughout our careers, we have witnessed firsthand the immense potential of artificial intelligence (AI) in revolutionizing production processes, enhancing efficiency, and optimizing outcomes.'
  },
  {
    title: 'What are we trying to solve?',
    text: ''
  },
  {
    title: 'How do we solve this issue?',
    text: ''
  }
])
</script>

<style scoped>
.gradient {
  background: linear-gradient(
      55deg,
      rgba(236, 145, 42, 0.2) -32.36%,
      rgba(236, 145, 42, 0) 92.04%
    ),
    #fff;
}
</style>
