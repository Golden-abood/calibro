<template>
  <div class="container pt-12 pb-40">
    <div class="text-center mx-auto md:max-w-[40%]">
      <BaseTitle title="Our talented Team" class="text-5xl" />
      <BaseParagraphText
        class="text-lg pt-6 mx-auto max-w-[80%]"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ."
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 pt-12 relative z-20"
    >
      <div
        v-for="item in team"
        class="bg-gray overflow-hidden item rounded-xl text-center pb-2 cursor-pointer"
      >
        <div class="relative card">
          <NuxtImg class="w-full duration-300" :src="item.photo" />
          <p
            class="absolute -top-40 duration-500 left-0 text text-white text-lg font-normal z-30 text-start ps-5"
          >
            {{ item.text }}
          </p>
        </div>
        <BaseTitle :title="item.name" class="pt-3 text-xl" />
        <BaseParagraphText
          :text="item.job"
          class="pt-1 text-base text-white !opacity-1"
        />
      </div>
    </div>
    <!--before:bg-gradient-to-tl before:from-[#f1563c] before:from-1% before:to-[#f8b75f] before:to-60% before:absolute before:blur-[290px] before:rounded-[371px] before:top-[-200px] before:left-0 before:lg:left-[24%] before:w-96 before:lg:w-[470.522px] before:h-96 before:lg:h-[963.598px] before:opacity-30 before:rotate-[89.853deg]-->
    <div class="relative gradi"></div>
  </div>
</template>

<script setup lang="ts">
const team = ref([
  {
    photo: '/images/About/team-1.svg',
    name: 'Spencer Wright',
    job: 'Project management',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga harum quos nulla! Earum ad provident cupiditate laudantium error accusantium cum?'
  },
  {
    photo: '/images/About/team-2.svg',
    name: 'Blake Matthews',
    job: 'CEO & Co-Founder',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga harum quos nulla! Earum ad provident cupiditate laudantium error accusantium cum?'
  },
  {
    photo: '/images/About/team-3.svg',
    name: 'Caroline Ming',
    job: 'Sales',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga harum quos nulla! Earum ad provident cupiditate laudantium error accusantium cum?'
  },
  {
    photo: '/images/About/team-2.svg',
    name: 'Anna Mills',
    job: 'Design lead',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga harum quos nulla! Earum ad provident cupiditate laudantium error accusantium cum?'
  }
])
</script>

<style scoped>
.item:hover .text {
  top: 20px;
}

.card::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #000000b2;
  transition: 0.5s;
}

.card:hover::after {
  height: 100%;
}
.gradi::before {
  content: '';
  z-index: 2;
  width: 100%;
  height: 250px;
  filter: blur(200px);
  background: radial-gradient(#f1563c 17.55%, #f8b75f 52.69%);
  position: absolute;
  top: 90%;
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
