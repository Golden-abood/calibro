<template>
  <div class="bg-black overflow-hidden">
    <div class="container pt-48 pb-32 relative gradi">
      <div class="text-center pb-40 relative z-10">
        <BaseTitle
          title="Lorem ipsum dolor sit amet, consetetur sa"
          class="text-3xl md:text-5xl"
        />
        <BaseParagraphText
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
          class="pt-6 text-lg md:max-w-[58%] mx-auto"
        />
      </div>
      <div class="md:flex items-center justify-between relative">
        <div class="md:max-w-[50%] text-center md:text-start">
          <BaseTitle title="Our Mission" :active="true" class="text-2xl" />
          <BaseTitle
            title="We are proud of our products"
            class="text-3xl md:text-5xl pt-6 indent-1"
          />
          <BaseParagraphText
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, "
            class="py-3 mt-7"
          />
        </div>
        <div class="md:w-[35%]">
          <NuxtImg
            width="308"
            class="relative mx-auto md:mx-0 mt-5 md:mt-0"
            src="/images/About/photo-1.svg"
          />
        </div>
      </div>
      <div class="md:flex items-center lg:items-start justify-between pt-32">
        <div class="md:w-[35%] hidden md:block">
          <NuxtImg
            width="429"
            class="relative"
            src="/images/About/photo-2.svg"
          />
        </div>
        <div class="md:max-w-[50%] text-center md:text-start">
          <BaseTitle title="Our Vision" :active="true" class="text-2xl" />
          <BaseTitle
            title="We are proud of our products"
            class="text-3xl md:text-5xl pt-6 indent-1"
          />
          <BaseParagraphText
            text="Bridge stands as a promise, not just a platform. It guarantees that your model reaches your vast user base, complemented by an intuitive UI. With state-of-the-art concept, system design, infrastructure, security, and devops, Bridge is always ready for uninterrupted feature integration. It offers models administrators a comprehensive panel to monitor user satisfaction and usage, easily enable/disable models or versions, upload new model iterations with zero downtime, and provides integrated license, billing, and subscription management to let admins give access to end customers over their modules."
            class="py-3 mt-7"
          />
        </div>
        <div class="md:w-[35%] md:hidden mt-5 md:mt-0">
          <NuxtImg
            width="429"
            class="relative mx-auto"
            src="/images/About/photo-2.svg"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <AboutUsCard />
    </div>
    <AboutUsOurTeam />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 511.532px;
  height: 531.461px;
  filter: blur(290px);
  mix-blend-mode: normal;
  background: radial-gradient(
    2762.36% 537.65% at -49.5% -250%,
    #ec912a 17.55%,
    rgba(236, 145, 42, 0.14) 27.56%,
    #ec912a 55.89%,
    #fff 66.53%,
    rgba(236, 145, 42, 0.38) 72.69%
  );
  border-radius: 531px;
  position: absolute;
  top: 5%;
  left: 10%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}

@media (max-width: 768px) {
  .gradi::before {
    height: 350px;
  }
}
</style>
