<template>
  <div class="grid-container">
    <life-cycle-card
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      class="sm:w-[200px]"
      :class="`card-${index + 1}`"
    />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

interface LifeCycleItem {
  number: string
  text: string
  arrows: {
    dir: string
    label: string
  }[]
}

const { width } = useWindowSize()

const isSmallScreen = computed(() => width.value <= 990)

const items = computed<LifeCycleItem[]>(() => [
  {
    number: '01',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? 'bottom-left' : 'top',
        label: 'Yes'
      },
      {
        dir: isSmallScreen.value ? 'bottom-right' : 'right',
        label: 'No'
      }
    ]
  },
  {
    number: '02',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? '' : 'top',
        label: isSmallScreen.value ? '' : 'No'
      },
      {
        dir: isSmallScreen.value ? 'bottom' : 'right',
        label: isSmallScreen.value ? '' : 'Yes'
      }
    ]
  },
  {
    number: '03',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? '' : 'bottom',
        label: ''
      }
    ]
  },
  {
    number: '04',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? 'bottom-right' : 'bottom-left',
        label: ''
      }
    ]
  },
  {
    number: '05',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? '' : 'bottom',
        label: ''
      }
    ]
  },
  {
    number: '06',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: 'bottom',
        label: ''
      }
    ]
  },
  {
    number: '07',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? 'bottom' : 'right',
        label: ''
      }
    ]
  },
  {
    number: '08',
    text: 'Leverage one of our ML eng',
    arrows: [
      {
        dir: isSmallScreen.value ? 'bottom-right' : 'top',
        label: ''
      },
      {
        dir: isSmallScreen.value ? 'bottom-left' : 'right',
        label: ''
      }
    ]
  },
  {
    number: '09',
    text: 'Leverage one of our ML eng',
    arrows: []
  },
  {
    number: '10',
    text: 'Leverage one of our ML eng',
    arrows: []
  }
])
</script>

<style>
.life-cycle-card {
  border: 2px solid red;
}
</style>
