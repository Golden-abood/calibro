<template>
  <div
    ref="card"
    class="parallax-card p-4 rounded-lg overflow-hidden"
    :style="cardStyle"
    @mouseenter="isParallaxActive = true"
    @mouseleave="isParallaxActive = false"
  >
    <HoverShadow :x="elementX" :y="elementY" />

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useParallax, useMouseInElement } from '@vueuse/core'

const card = ref(null)
const isParallaxActive = ref(false)

const { tilt, roll } = useParallax(card)
const { elementX, elementY, elementWidth } = useMouseInElement(card)

const cardStyle = computed(() => {
  if (isParallaxActive.value)
    return {
      transform: `perspective(${elementWidth.value}px) rotateX(${roll.value}deg) rotateY(${tilt.value}deg) `
    }
  else
    return {
      transform: `rotateX(0deg) rotateY(0deg)`,
      transition: 'transform .3s ease-in-out'
    }
})
</script>
