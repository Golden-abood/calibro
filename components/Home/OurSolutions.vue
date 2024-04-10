<template>
  <div class="relative gradient">
    <BaseTitle
      title="Our solutions common values"
      class="text-center text-3xl md:text-5xl mb-16 container relative !blur-0"
    />

    <card
      class="container overflow-hidden relative py-20 back-gradient rounded-tl-[67px] rounded-tr-[67px] rounded-bl-[62px] rounded-br-[62px] border-primary border-[1px] border-solid"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-center"
      >
        <div
          v-for="(item, index) in solutions"
          :key="index"
          class="rounded-[20px] py-10 px-4 hover:border-solid hover:border-[1px] hover:border-primary duration-300"
        >
          <div class="relative">
            <NuxtImg
              :src="item.icon"
              class="mx-auto mb-4"
              :class="index === 0 ? 'w-12' : 'w-14'"
            />

            <BaseTitle :title="item.title" class="text-2xl mb-4" />

            <BaseParagraphText :text="item.body" class="text-base text-white" />
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script setup lang="ts">
const solutions = ref([
  {
    icon: '/images/solutions/icon-1-removebg-preview-(1).png',
    title: 'Scalable Deployment',
    body: 'Efficient handling of fluctuating user demand'
  },
  {
    icon: '/images/solutions/icon-2.svg',
    title: 'Seamless Feature Integration',
    body: 'Seamless technology integration and upgrades without user interruption'
  },
  {
    icon: '/images/solutions/icon-3.svg',
    title: 'Performance Monitoring',
    body: 'Real-Time Insights: Monitor your deployed machine learning models for performance and user satisfaction'
  },
  {
    icon: '/images/solutions/icon-4.svg',
    title: 'Robust Security Measures',
    body: 'Ensures robust security for your models and data through authentication, encryption, and ongoing audits'
  },
  {
    icon: '/images/solutions/icon-5.svg',
    title: 'Intuitive UI Design',
    body: 'Intuitive design and clear guidance to make your model user friendly'
  },
  {
    icon: '/images/solutions/icon-5.svg',
    title: 'Misusage alarm',
    body: 'Alarm model users at model misusage'
  }
])
</script>

<style scoped>
/* .gradient::before {
  content: '';
  position: absolute;
  top: 5%;
  left: 0;
  opacity: 0.5;
  width: 90%;
  height: 932.253px;
  transform: rotate(-176.456deg) scale3d(1, 1, 1);
  background: radial-gradient(#ff29a8 17.55%, #ff7a00 20.69%, #ffd481);
  filter: blur(270px);
  border-radius: 1100px;
} */
.back-gradient {
  background: linear-gradient(
    180deg,
    rgba(50, 49, 49, 0.7) 0%,
    rgba(50, 49, 49, 0) 100%
  );
}
</style>
