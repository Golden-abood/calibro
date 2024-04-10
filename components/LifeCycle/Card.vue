<template>
  <div ref="lifeCycleCard" class="relative">
    <div class="card relative" :class="{ 'card-hover': isHovered }">
      <div class="first-side"></div>

      <div class="second-side"></div>

      <div class="content">
        <p class="card-number">{{ item.number }}</p>

        <p>All your requested models are default in bridge?</p>
      </div>
    </div>

    <div
      v-for="arrow in item.arrows"
      :key="arrow.dir"
      class="arrow absolute w-[100px]"
      :class="{ 'arrow-hover': isHovered, [`arrow-${arrow.dir}`]: true }"
    >
      <img
        v-if="arrow.dir"
        :src="`/images/life-cycle/${arrow.dir}.png`"
        alt="arrow"
      />
      <span class="absolute top-12 left-1/4 text-[#fff]">{{
        arrow.label
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'

const lifeCycleCard = ref(null)
const isHovered = useElementHover(lifeCycleCard)

const { item } = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>
