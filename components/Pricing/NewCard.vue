<template>
  <div
    class="border-solid border-[4px] border-white rounded-3xl py-10 px-20 relative"
  >
    <div
      class="absolute right-[8%] w-[460px] h-[460px] rounded-[460px] gradient"
    ></div>
    <div
      class="absolute top-[0%] -right-[50%] w-[1080px] h-[560px] rounded-[980px] gradient-parent"
    ></div>
    <div
      class="absolute top-0 -right-[49%] w-[1150px] h-[500px] rounded-[1130px] gradient-grand-parent"
    ></div>
    <div
      class="absolute top-0 -right-[55%] w-[1250px] h-[500px] rounded-[1250px] gradient-parent"
    ></div>
    <div class="flex justify-between items-center">
      <div>
        <div class="flex items-center gap-x-5">
          <NuxtImg width="28" :src="card.icon" />
          <BaseTitle :title="card.title" class="text-lg" />
        </div>
        <BaseParagraphText
          text="For the best results"
          class="indent-2 mt-4 text-base"
        />
      </div>
      <div>
        <BaseTitle :title="card.price" class="text-4xl" />
        <BaseParagraphText text="/month" class="mt-3 text-base" />
      </div>
    </div>

    <hr class="bg-secondary h-[2px] my-4" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
      <div v-for="item in card.features">
        <div class="flex justify-between gap-x-5">
          <BaseTitle :title="item" />

          <NuxtImg width="24" src="/images/pricing/icon-11.svg" />
        </div>
      </div>
    </div>
    <BaseButton text="Get Started" class="mt-10 !p-0 text-sm" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  card: { type: Object, required: true }
})
</script>

<style scoped>
.gradient {
  background: linear-gradient(
    180deg,
    rgba(239, 161, 8, 0.02) 0%,
    rgba(236, 145, 42, 0.01) 100%
  );
}
.gradient-parent {
  background: linear-gradient(
    180deg,
    rgba(236, 145, 42, 0.01) 0%,
    rgba(239, 161, 8, 0.01) 100%
  );
}
.gradient-grand-parent {
  background: linear-gradient(
    180deg,
    rgba(236, 145, 42, 0.02) 0%,
    rgba(239, 161, 8, 0.02) 100%
  );
}
</style>
