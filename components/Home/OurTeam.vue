<template>
  <div class="relative">
    <NuxtImg
      class="hidden md:block absolute right-0 top-0 h-full opacity-10 z-0"
      src="/images/team/waves.svg"
    />

    <div class="back py-12 px-20">
      <div class="relative">
        <div
          class="grid grid-cols-2 md:flex md:justify-between items-center gap-y-10 gap-x-10 mb-20"
        >
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[158px]"
            src="/images/team/image-1.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[276px]"
            src="/images/team/image-2.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[110px]"
            src="/images/team/image-3.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[96px]"
            src="/images/team/image-4.svg"
          />
          <NuxtImg
            class="hidden md:block mx-auto md:m-0 mb-5 w-[100px]"
            src="/images/team/image-5.svg"
          />
        </div>

        <div
          class="grid grid-cols-2 gap-y-10 md:flex md:justify-between gap-x-10 items-center"
        >
          <NuxtImg
            class="block md:hidden mx-auto md:m-0 mb-5 w-[100px]"
            src="/images/team/image-5.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[110px]"
            src="/images/team/image-3.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[158px]"
            src="/images/team/image-1.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[100px]"
            src="/images/team/image-5.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[280px]"
            src="/images/team/image-7.svg"
          />
          <NuxtImg
            class="mx-auto md:m-0 mb-5 w-[276px]"
            src="/images/team/image-2.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.back {
  background: linear-gradient(
      55deg,
      rgba(236, 145, 42, 0.2) -32.36%,
      rgba(236, 145, 42, 0) 92.04%
    ),
    #fff;
}
</style>
