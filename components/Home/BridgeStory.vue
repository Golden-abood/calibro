<template>
  <div class="container pt-20 lg:pt-8">
    <BaseTitle
      title="Let’s break bridge Story"
      class="text-3xl md:text-5xl text-center md:text-start"
    />
    <div class="container pt-10">
      <BaseTitle
        title="Phase 1"
        :active="true"
        class="text-2xl text-center md:text-start"
      />
      <div class="md:flex items-center justify-between relative">
        <div class="md:max-w-[50%] text-center md:text-start">
          <BaseTitle
            title="Engineers and Scientists Across Diverse Businesses and Markets:"
            class="text-3xl lg:text-5xl pt-5"
          />
          <BaseParagraphText
            text="Engineers and scientists in different buisness and markets are continuously pushing the boundaries, creating innovative and powerful machine learning models. When they reach the point where they want their models to benefit a wide range of users, they choose Bridge."
            class="py-3 mt-5 md:mt-0"
          />
        </div>
        <NuxtImg
          src="/images/Arrow-02.svg"
          class="absolute w-[25%] top-[50%] lg:top-[37%] left-[42%] lg:left-[40%] hidden md:block"
        />
        <div class="md:w-[35%] relative gradi">
          <NuxtImg
            class="relative w-[350px] mx-auto mt-5 md:mt-0"
            src="/images/story-1.png"
          />
        </div>
      </div>
      <div class="md:flex items-center lg:items-start justify-between pt-32">
        <div class="md:w-[35%] hidden md:block">
          <NuxtImg
            width="221"
            class="relative mx-auto"
            src="/images/story-2.svg"
          />
        </div>
        <div class="md:max-w-[50%] text-center md:text-start">
          <BaseTitle title="Phase 2" :active="true" class="text-2xl" />
          <BaseTitle
            title="Bridge - More Than Just a Platform"
            class="text-3xl lg:text-5xl pt-5"
          />
          <BaseParagraphText
            text="Bridge stands as a promise, not just a platform. It guarantees that your model reaches your vast user base, complemented by an intuitive UI. With state-of-the-art concept, system design, infrastructure, security, and devops, Bridge is always ready for uninterrupted feature integration. It offers models administrators a comprehensive panel to monitor user satisfaction and usage, easily enable/disable models or versions, upload new model iterations with zero downtime, and provides integrated license, billing, and subscription management to let admins give access to end customers over their modules."
            class="py-3 mt-5 md:mt-0"
          />
        </div>
        <div class="md:w-[35%] md:hidden mt-5 md:mt-0">
          <NuxtImg
            width="221"
            class="relative mx-auto"
            src="/images/story-2.svg"
          />
        </div>
      </div>
      <div
        class="md:flex items-center lg:items-start justify-between pt-32 relative"
      >
        <div class="md:max-w-[50%] text-center md:text-start">
          <BaseTitle title="Phase 3" :active="true" class="text-2xl" />
          <BaseTitle
            title="The End-User Experience"
            class="text-3xl lg:text-5xl pt-5"
          />
          <BaseParagraphText
            text="End-users desire simplicity and efficiency. With Bridge, they get just that. They can effortlessly use the model, benefit from its features, 
and provide, optionally, their invaluable feedback at the end of every interaction"
            class="py-3 mt-5 md:mt-0"
          />
        </div>
        <NuxtImg
          src="/images/arrow-left-2.svg"
          class="absolute w-[7%] top-[20%] left-[55%] hidden md:block"
        />
        <div class="md:w-[35%] mt-5 md:mt-0">
          <NuxtImg
            width="221"
            class="relative mx-auto"
            src="/images/bridge-3.svg"
          />
        </div>
      </div>
      <BaseButton
        text="Discover More"
        bgColor="#ec912b"
        class="pt-16 text-center md:text-start"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 511.532px;
  height: 430.461px;
  filter: blur(280px);
  mix-blend-mode: normal;
  background: radial-gradient(
    2762.36% 537.65% at -49.5% -250%,
    #ec912a 17.55%,
    rgba(236, 145, 42, 0.14) 27.56%,
    #ec912a 50.89%,
    #fff 70.53%,
    rgba(236, 145, 42, 0.38) 82.69%
  );
  border-radius: 531px;
  position: absolute;
  top: 60%;
  right: 0%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}
</style>
