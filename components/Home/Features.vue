<template>
  <div class="container">
    <BaseTitle
      title="FEATURES"
      :active="true"
      class="text-3xl md:text-6xl text-center pb-36"
    />
    <div
      class="grid grid-cols-1 md:grid-cols-3 md:gap-x-7 gap-y-10 relative gradient"
    >
      <FeaturesCard :feature="features[0]" :index="0" class="col-span-2" />
      <div class="col-span-1">
        <FeaturesCard :feature="features[1]" :index="1" class="mb-10 md:mb-3" />
        <FeaturesCard :feature="features[2]" :index="2" />
        <BaseButton
          text="View more"
          bg-color="transparent"
          class="text-primary text-end"
        />
      </div>
    </div>
    <div class="hidden md:block relative w-[350px] h-[350px]">
      <div
        class="absolute w-[350px] h-[350px] rounded-[350px] border-solid border-[1px] bg-border -right-[1200px] -top-[20%]"
      ></div>
    </div>
    <BaseTitle
      title="Our team work(ed) in"
      class="text-3xl text-center md:text-start md:text-5xl pt-28 py-12"
    />
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
    title: 'User-Centric Dashboard',
    photo: '/images/features/TheDashboard.svg',
    body: [
      'Let users use their preferred model versions.',
      'Real-time alerts for model misusage, keeping users informed.',
      'Intuitive UI making model interactions user-friendly for non-technical end-users'
    ]
  },
  {
    title: 'Large user scale and security',
    photo: '/images/features/RecehTokCrypto.svg',
    body: [
      'Advanced system design that handles fluctuating  user demands.',
      'Robust security for  models and data through authentication, encryption, and regular audits'
    ]
  }
]
</script>

<style scoped>
.gradient::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 675px;
  height: 175px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ec912b 27.55%, #ec201b);
  filter: blur(300px);
  border-radius: 675px;
}
.bg-border {
  border-color: rgba(236, 145, 42, 0.3);
}
@media (max-width: 1200px) {
  .gradient::before {
    filter: blur(350px);
  }
}
</style>
