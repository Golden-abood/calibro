<template>
  <div class="bg-grey overflow-hidden">
    <BaseTitle
      title="Frequestly Asked Questions"
      class="text-3xl md:text-5xl text-center py-20"
    />
    <div class="bg-black py-16">
      <div class="container">
        <FAQQuestion v-for="item in questions" :question="item" class="mb-4" />
      </div>
    </div>
    <Ready class="pt-48 pb-28 relative gradi">
      <div class="flex justify-center gap-x-5 items-center mt-12">
        <BaseButton text="View Pricing" />
        <BaseButton text="Get in contact" />
      </div>
    </Ready>
  </div>
</template>

<script setup lang="ts">
const questions = ref([
  {
    title: 'How do I grow my business?',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  },
  {
    title: 'Can I cancel my subscription?',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  },
  {
    title: 'How do I contact the support?',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  },
  {
    title: 'Is a credit card required?',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  }
])
</script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 470px;
  height: 800px;
  filter: blur(350px);
  background: radial-gradient(#f1563c 17.55%, #f1563c 100%);
  border-radius: 963.598px;
  position: absolute;
  top: 60%;
  right: 20%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}
@media (max-width: 900px) {
  .gradi::before {
    width: 500px;
  }
}
</style>
