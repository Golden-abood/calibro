<template>
  <div class="bg-grey overflow-hidden">
    <BaseTitle
      title="Get in touch with us"
      class="text-center text-4xl md:text-6xl pt-24 pb-16"
    />
    <div class="bg-black">
      <ContactForm />
    </div>
    <div class="container pt-28 py-32 relative">
      <!--before:bg-gradient-to-t before:from-[#f1563c] before:from-1% before:to-[#f8b75f] before:to-20% before:absolute before:lg:blur-[300px] before:rounded-[371px] before:top-[50%] before:lg:top-4s0 before:left-0 before:lg:left-[24%] before:w-[97] before:lg:w-[470.522px] before:blur-[220px] before:h-96 before:lg:h-[881.21px] before:opacity-50 before:rotate-[89.853deg]-->
      <Ready class="relative pt-10 gradi">
        <BaseButton text="View Pricing" class="mt-12 relative z-10" />
      </Ready>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 470px;
  height: 800px;
  filter: blur(260px);
  background: radial-gradient(#f1563c 17.55%, #f8b75f 32.69%);
  border-radius: 963.598px;
  position: absolute;
  top: 50%;
  left: 30%;
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
