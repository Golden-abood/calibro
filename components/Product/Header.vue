<template>
  <div>
    <div class="pb-11">
      <BaseTitle
        title="Bridge"
        :active="true"
        class="py-11 text-center text-8xl"
      />
      <BaseParagraphText
        text="Unlock Business Potential: Bridge Your ML Models to Market!"
        class="text-center text-3xl md:max-w-[47%] mx-auto"
      />
    </div>
    <div
      class="container xl:flex gap-x-16 xl:justify-arround xl:items-end relative mt-10"
    >
      <div class="mx-auto relative gradi">
        <NuxtImg width="300" src="/images/bridge-1.png" class="mx-auto" />
      </div>
      <NuxtImg
        width="150"
        src="/images/arrow-left.svg"
        class="rotate-90 my-16 xl:my-0 mx-auto xl:rotate-0 xl:absolute top-[47%] right-[59%]"
      />
      <NuxtImg width="230" src="/images/bridge-2.png" class="mx-auto" />
      <NuxtImg
        width="150"
        src="/images/arrow-left.svg"
        class="xl:hidden rotate-90 my-16 mx-auto xl:rotate-0 xl:absolute top-[47%] left-[59%]"
      />
      <NuxtImg width="320" src="/images/bridge-3.png" class="mx-auto" />
      <NuxtImg
        width="150"
        src="/images/arrow-left.svg"
        class="hidden xl:block absolute top-[47%] left-[59%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
