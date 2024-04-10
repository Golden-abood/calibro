<template>
  <div id="cursor" :style="cursorStyle"></div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
const cursorSize = ref(40)

const cursorStyle = computed(() => ({
  width: `${cursorSize.value}px`,
  height: `${cursorSize.value}px`,
  left: `${x.value}px`,
  top: `${y.value}px`,
  position: 'fixed',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  border: '1px solid #ec912b',
  transition: 'width 0.3s ease 0.2s, height 0.3s ease 0.2s', // 0.2s delay added
  zIndex: 50
}))

const enlargeCursor = () => {
  cursorSize.value = 40
}
const shrinkCursor = () => {
  cursorSize.value = 20
}
</script>

<style>
#cursor {
  position: absolute;
  pointer-events: none;
}

body {
  /* cursor: none; */
}
</style>
