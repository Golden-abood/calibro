<template>
  <div class="mx-auto text-center md:max-w-[70%] relative">
    <BaseTitle
      title="Are you ready to grow your business with us?"
      class="text-3xl md:text-6xl relative z-10"
    />
    <BaseParagraphText
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
"
      class="mt-6 text-base relative z-10"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
