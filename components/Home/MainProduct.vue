<template>
  <div class="bg-black relative z-10">
    <div>
      <BaseTitle
        title="Main Product: Bridge"
        :active="true"
        class="text-center text-3xl"
      />
      <NuxtImg
        src="/images/MicrosoftTeams-image.png"
        class="mt-20 mb-10 md:mb-40 w-full"
      />
      <!--
        <div
        class="xl:flex gap-x-16 xl:justify-arround xl:items-end relative pt-16 pb-20"
      >
        <div class="mx-auto relative gradi">
          <NuxtImg width="300" src="/images/bridge-1.png" class="mx-auto" />
        </div>
        <NuxtImg
          width="150"
          src="/images/arrow-left.svg"
          class="rotate-90 my-16 xl:my-0 mx-auto xl:rotate-0 xl:absolute top-[47%] right-[59%]"
        />
        <NuxtImg width="230" src="/images/bridge-2.png" class="mx-auto" />
        <NuxtImg
          width="150"
          src="/images/arrow-left.svg"
          class="xl:hidden rotate-90 my-16 mx-auto xl:rotate-0 xl:absolute top-[47%] left-[59%]"
        />
        <NuxtImg width="320" src="/images/bridge-3.png" class="mx-auto" />
        <NuxtImg
          width="150"
          src="/images/arrow-left.svg"
          class="hidden xl:block absolute top-[47%] left-[59%]"
        />
      </div>
      -->
    </div>
    <BaseTitle
      title="Unlock Business Potential: Bridge Your ML Models to Market!"
      class="hidden md:block text-center text-5xl"
    />
    <div class="container">
      <BaseTitle
        title="Unlock Business Potential: Bridge Your ML Models to Market!"
        class="md:hidden text-center text-3xl"
      />
      <BaseParagraphText
        text="Struggling to get your ML pipelines and models into the hands of your business customers? Bridge is a comprehensive AI platform that streamlines the transition of ML models from development to large-scale production. It doesn’t not only automates deployment and guarantees uninterrupted feature integration but also places a heavy emphasis on real-time performance insights and unwavering security. With an intuitive UI tailored for all, Bridge alerts users of model misusage while its admin dashboard delivers insights on model health and user engagement. For businesses looking to deploy, scale, and optimize their models leverage, Bridge bridges the gap, ensuring your models seamlessly reach every model’s user."
        class="text-center pb-16 mt-10 md:mt-14 md:px-10 shadow-text"
      />
      <BaseButton
        text="Discover More"
        bgColor="#ec912b"
        class="text-center md:mt-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradi::before {
  content: '';
  z-index: -2;
  width: 511.532px;
  height: 430px;
  filter: blur(260px);
  mix-blend-mode: normal;
  background: radial-gradient(
    2762.36% 537.65% at -49.5% -250%,
    #ec912a 17.55%,
    rgba(236, 145, 42, 0.14) 27.56%,
    #ec912a 59.89%,
    #fff 66.53%,
    rgba(236, 145, 42, 0.38) 72.69%
  );
  border-radius: 531px;
  position: absolute;
  top: 0%;
  right: 0%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}
.shadow-text {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
