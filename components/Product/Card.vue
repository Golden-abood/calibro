<template>
  <div
    class="rounded-2xl p-10 text-center product-card !relative !z-[100] duration-[600ms]"
    :class="[
      type === 'solution' ? 'problem-card' : 'solution-card',
      active ? 'h-[480px]' : 'h-[200px] md:h-[150px]'
    ]"
    @mouseenter="active = true"
    @mouseleave="active = false"
  >
    <div
      class="text-2xl"
      :class="type === 'solution' && index === 0 ? 'text-[22px]' : ''"
    >
      <BaseTitle
        :title="card.title"
        :class="type === 'solution' ? 'text-white' : '!text-[#EC912A]'"
      />
      <BaseTitle
        :title="card.description"
        :class="type === 'solution' ? 'text-white' : '!text-[#EC912A]'"
      />
    </div>
    <Transition name="fade">
      <div v-if="active" class="hidden details">
        <NuxtImg :src="card.photo" class="mx-auto py-7 w-[50%]" />

        <BaseParagraphText :text="card.text" class="text-start" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: { type: String, required: true },
  card: { type: Object, required: true },
  index: { type: Number, required: true }
})

const active = ref(false)
</script>

<style scoped>
.solution-card {
  background: rgba(236, 145, 42, 0.3);
}
.problem-card {
  background: rgba(236, 145, 42, 0.69);
}
.product-card:hover .details {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
