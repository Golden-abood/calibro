<template>
  <div class="container">
    <BaseTitle title="FEATURES" class="text-5xl text-center pt-28 pb-48" />
    <div
      v-for="(feature, index) in features"
      class="grid grid-cols-1 md:grid-cols-7 gap-x-20 mb-10 md:mb-72 relative gradient"
      :class="
        index === 0
          ? 'before:top-[-30%] before:left-[-10%]'
          : index == 1
          ? 'before:bottom-[-40%] before:right-[-10%]'
          : 'before:left-[-10%] before:top-[40%]'
      "
    >
      <div
        v-if="index === 0"
        class="hidden md:block absolute w-[350px] h-[350px] rounded-[350px] border-solid border-[1px] bg-border -right-[23%] top-[75%]"
      ></div>
      <div
        class="border-solid border-primary border-[1px] p-7 rounded-[20px] col-span-4 wrapper-image"
        :class="index === 1 ? 'lg:order-2' : 'order-1'"
      >
        <NuxtImg :src="feature.photo" class="w-full relative z-50" />
      </div>
      <div
        class="col-span-3 pt-10"
        :class="index === 1 ? 'lg:order-1' : 'order-2'"
      >
        <BaseTitle
          class="pb-3 relative text-[36px] max-w-[70%] z-50"
          :title="feature.title"
        />
        <BaseParagraphText
          v-for="item in feature.body"
          :text="item"
          class="ms-5 text-lg relative z-50 before:absolute before:content-[''] before:top-3 before:-left-4 before:w-1 before:h-1 before:rounded-full before:bg-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Admin-Centric Dashboard',
    photo: '/images/features/RecehTokCrypto.svg',
    body: [
      'Further model version uploads.',
      'Comprehensive tracking of models performance and user interactions and feedback across all modules.',
      'Swiftly enable or disable modules/versions as required.',
      'Integrated license, billing, and subscription management'
    ]
  },
  {
    title: 'Large user scale and security',
    photo: '/images/features/RecehTokCrypto.svg',
    body: [
      'Advanced system design that handles fluctuating  user demands.',
      'Robust security for  models and data through authentication, encryption, and regular audits'
    ]
  },
  {
    title: 'User-Centric Dashboard',
    photo: '/images/features/TheDashboard.svg',
    body: [
      'Let users use their preferred model versions.',
      'Real-time alerts for model misusage, keeping users informed.',
      'Intuitive UI making model interactions user-friendly for non-technical end-users'
    ]
  }
]
</script>

<style scoped>
.wrapper-image {
  background: rgba(217, 217, 217, 0.03);

  box-shadow: 20px 30px 100px 0px #000;
}
.bg-border {
  border-color: rgba(236, 145, 42, 0.3);
}
.gradient::before {
  content: '';
  position: absolute;
  width: 475px;
  height: 175px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ec912b 27.55%, #ec201b);
  filter: blur(270px);
  border-radius: 675px;
}
@media (max-width: 1200px) {
  .gradient::before {
    filter: blur(350px);
  }
}
@media (max-width: 600px) {
  .gradient::before {
    width: 0;
  }
}
</style>
