<template>
  <div class="container">
    <BaseTitle
      title="Customer life cycle"
      :active="true"
      class="text-3xl md:text-6xl text-center pb-36"
    />
      <life-cycle-section class="mb-36"></life-cycle-section>
      
      <Ready class="relative mt-10 gradi">
        <BaseButton text="View Pricing" class="mt-14 pb-5 relative z-10" />
      </Ready>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 100%;
  height: 400.461px;
  filter: blur(260px);
  background: radial-gradient(#f1563c 17.55%, #f8b75f 52.69%);
  border-radius: 963.598px;
  position: absolute;
  top: 60%;
  right: 0%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1.5, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}
@media (max-width: 900px) {
  .gradi::before {
    width: 500px;
  }
}
</style>
