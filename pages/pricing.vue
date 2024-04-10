<template>
  <div class="bg-black pb-40 overflow-hidden">
    <div class="container min-h-screen">
      <div class="mx-auto text-center pt-36 md:max-w-[60%]">
        <BaseTitle
          title="Subscribe to Avail Advance Features"
          class="text-4xl md:text-6xl mx-auto"
        />
        <BaseParagraphText
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr.Lorem ipsum dolor sit amet, consetetur sadi"
          class="text-md md:text-lg pt-6 s mx-auto"
        />

        <!--
        <PricingToggler @change-price="changePrice" />
      </div>
      <div
        class="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-y-10"
      >
        <PricingCard
          v-for="(card, index) in cards"
          :card="card"
          :active="index == 1 ? true : false"
          class="relative"
          :class="index === 0 ? ' gradient' : ''"
        />
        -->
        <!--radi after:absolute after:top-0 after:-left-20 after:w-[400px] after:h-[300px] after:rounded-[588.053px] after:rotate-[90deg] after:opacity-50 after:blur-[350px] after:z-30-->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 mt-16">
        <PricingNewCard :card="cards[1]" class="col-span-2 back-gradi" />
        <div class="col-span-1">
          <BaseTitle title="Need Something Different?" class="text-4xl my-3" />
          <BaseParagraphText text="Get in touch" class="mt-6 mb-3" />
          <BaseButton
            text="Let us Know"
            bg-color="transparent"
            class="border-[2px] border-solid border-white rounded-xl text-white !text-base text-center"
          />
        </div>
      </div>
      <div class="container pt-48 pb-10">
        <Ready class="relative gradi">
          <BaseButton text="Get in contact" bg-color="#ec912b" class="mt-8" />
        </Ready>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const active = ref(true)

const cards = computed(() => {
  return [
    {
      icon: '/images/pricing/icon-1.svg',
      title: 'Regular',
      description: 'Starter Plan',
      features: [
        'Limited Projects',
        'Regular Support Business',
        '1 month Free Trial',
        '3GB storage',
        'Ads Preview'
      ],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      price: 'Free',
      desc: 'For Limited Period'
    },
    {
      icon: '/images/pricing/icon-(10).svg',
      title: 'Plantinum',
      description: 'For the best results',
      features: [
        'Limited Projects',
        'Regular Support Business',
        '1 month Free Trial',
        '20GB storage',
        'Ads Preview'
      ],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      price: `${active.value ? '$342' : '500$'}`,
      desc: 'For Limited Period'
    },
    {
      icon: '/images/pricing/icon-3.svg',
      title: 'Standard',
      description: 'Most popular',
      features: [
        'Limited Projects',
        'Regular Support Business',
        '1 month Free Trial',
        '10GB storage',
        'Ads Preview'
      ],
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
      price: `${active.value ? '234$' : '500$'}`,
      desc: 'Billing Monthly'
    }
  ]
})
const changePrice = newValue => (active.value = newValue)
</script>

<style scoped>
.gradi::before {
  content: '';
  z-index: 2;
  width: 470px;
  height: 800px;
  filter: blur(260px);
  background: radial-gradient(#f1563c 17.55%, #f8b75f 72.69%);
  border-radius: 800px;
  position: absolute;
  top: 60%;
  right: 20%;
  opacity: 0.6;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(90deg)
    skew(0deg, 0deg);
  transform-style: preserve-3d;
}
@media (max-width: 900px) {
  .gradi::before {
    width: 500px;
  }
}
.gradient::before {
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
.back-gradi {
  background: linear-gradient(
    113deg,
    #3f3e3e -5.56%,
    rgba(12, 12, 12, 0) 72.92%
  );
}
</style>
