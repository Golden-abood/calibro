<template>
  <canvas
    id="animation_bg"
    class="absolute w-full h-full bg-black opacity-50"
  />

  <div class="py-20 hero">
    <div class="container items-center lg:flex lg:justify-between">
      <div class="lg:max-w-[60%] text-center lg:text-start lg:pt-16">
        <div class="pt-20 md:pt-0">
          <BaseTitle
            title="Bridge the ML production gap wit Bridge!"
            class="text-4xl md:text-5xl text-white font-bold relative before:absolute before:-top-10 before:lg:-top-8 before:content-[url('/images/before-title.svg')] before-title xl:before:-left-[6%] lg:before:-left-[5%] md:before:left-[16%] sm:before:-left-[7%] before:left-[-5%]"
          />
        </div>
        <BaseParagraphText
          text="Take your ML models from conception to widespread use effortlessly.
          Deploy, manage, monitor, and ensure correct and friendly usage with
          CalibroAI ..."
          class="text-white text-lg md:text-xl mt-8 lg:max-w-[80%]"
        />
        <BaseButton
          text="Learn More"
          bg-color="transparent"
          class="relative z-10 text-white mt-10 border-primary text-center rounded-xl mx-auto lg:mx-0 w-fit border-solid border-[1px]"
        />
      </div>
      <!--
        <div
        class="hidden xl:block absolute right-[35%] w-[400px] h-[400px] rounded-[450px] circle-gradient"
        ></div>
        <div
          class="hidden xl:block absolute right-[30%] w-[550px] h-[550px] rounded-[550px] circle-gradient-parent"
        ></div>
      -->
      <!--before:absolute before:bg-[#EC201B] before:lg:blur-[400px] before:rounded-[371px] before:lg:top-0 before:left-0 before:w-full before:blur-[220px] before:h-[370px] before:lg:h-[200%] before:top-0-->
      <div
        class="relative flex-col items-center justify-center mt-16 lg:mr-20 lg:mt-0 gradient"
      >
        <NuxtImg
          width="250"
          class="relative mx-auto z-3 -mb-36 animate-move"
          src="/images/arrow-up.png"
        />

        <NuxtImg
          width="220"
          class="relative z-10 mx-auto -mb-12"
          src="/images/brain-2.png"
        />
        <NuxtImg
          width="280"
          class="relative mx-auto lg:mx-0"
          src="/images/floor.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [{ src: '/js/waves.js', tagPosition: 'bodyClose' }]
})
</script>

<style scoped>
.hero {
  /* min-height: 100vh; */
}

@media (max-width: 320px) {
  .before-title::before {
    left: -5%;
  }
}
@media (min-width: 325px) and (max-width: 376px) {
  .before-title::before {
    left: 0%;
  }
}
@media (min-width: 377px) and (max-width: 395px) {
  .before-title::before {
    left: 5%;
  }
}
@media (min-width: 395px) and (max-width: 450px) {
  .before-title::before {
    left: 10%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .before-title::before {
    left: -4%;
    top: -25%;
  }
}
.gradient::before {
  content: '';
  position: absolute;
  top: 0%;
  left: 0;
  width: 90%;
  height: 400px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ec201b 47.55%, #ffd481);
  filter: blur(300px);
  border-radius: 1100px;
}
@media (max-width: 600px) {
  .gradient::before {
    width: 0;
    height: 400px;
  }
}
@media (max-width: 1200px) {
  .gradient::before {
    filter: blur(350px);
  }
}
.circle-gradient {
  background: linear-gradient(
    180deg,
    rgba(239, 161, 8, 0.01) 0%,
    rgba(236, 145, 42, 0.01) 100%
  );
}
.circle-gradient-parent {
  background: linear-gradient(
    180deg,
    rgba(239, 161, 8, 0.04) 0%,
    rgba(236, 145, 42, 0.04) 100%
  );
}
</style>
