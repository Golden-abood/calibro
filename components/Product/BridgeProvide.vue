<template>
  <div class="bg-gray py-12">
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 items-center gap-x-20"
    >
      <div>
        <div
          v-for="(item, index) in sectionOne"
          class="lg:flex text-center lg:text-start items-start gap-x-12"
          :class="index === 3 ? 'mb-12 md:mb-0' : 'mb-12'"
        >
          <div class="relative flex">
            <NuxtImg
              width="64"
              src="/images/product/before-num.svg"
              class="relative -top-3 left-8"
            />
            <span class="text-white text-5xl font-bold justify-center">{{
              item.num
            }}</span>
          </div>
          <BaseParagraphText :text="item.text" />
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in sectionTwo"
          class="lg:flex text-center lg:text-start items-start gap-x-12"
          :class="index === 3 ? 'mb-12 md:mb-0' : 'mb-12'"
        >
          <div class="relative flex">
            <NuxtImg
              width="64"
              src="/images/product/before-num.svg"
              class="relative -top-3 left-8"
            />
            <span class="text-white text-5xl font-bold">{{ item.num }}</span>
          </div>
          <BaseParagraphText :text="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sectionOne = ref([
  {
    num: "1",
    text: "Brings ML models from development notebooks to production systems on large user scale.",
  },
  {
    num: "2",
    text: "Ensures seamless feature integration without user experience interruption.",
  },
  {
    num: "3",
    text: "Provides admins with the productions model performance monitoring and users insights.",
  },
  {
    num: "4",
    text: "Offers an intuitive and user-friendly interface for easy model usage.",
  },
]);
const sectionTwo = ref([
  {
    num: "5",
    text: "Alarm the model’s user if used input is not of a good quality.",
  },
  {
    num: "6",
    text: "Facilitates easy interpretation of model results for non-technical users.",
  },
  {
    num: "7",
    text: "Utilizes encryption techniques to secure data transmission and storage.",
  },
  {
    num: "8",
    text: "Conducts regular security and performance audits to ensure system resilience.",
  },
]);
</script>

<style scoped></style>
ّ
