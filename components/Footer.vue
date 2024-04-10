<template>
  <div class="relative z-10 bg-black pt-20">
    <NuxtImg
      src="/images/logo.svg"
      class="sm:hidden mx-auto mb-10 cursor-pointer"
      width="150"
    />
    <div class="container md:pb-24">
      <!--
      <div class="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2">
        <h3 class="font-semibold text-lg text-white">Company</h3>
        <BaseParagraphText
          v-for="item in items"
          :text="item"
          class="my-2 cursor-pointer"
        />
      </div>
      <div class="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-2">
        <h3 class="font-semibold text-lg text-white">Resources</h3>
        <BaseParagraphText
          v-for="item in resources"
          :text="item"
          class="my-2 cursor-pointer"
        />
      </div>
    --->
      <div
        class="hidden sm:block sm:col-span-4 lg:col-span-8 relative before:content-[''] before:absolute before:bg-white before:bottom-[10px] before:left-0 before:w-[20px] before-h-[2px]"
      >
        <div>
          <NuxtImg
            src="/images/logo.svg"
            width="150"
            class="mx-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div
      class="flex gap-x-3 xl:gap-x-5 justify-center pb-20 relative before:absolute before:top-0 before:h-[1px] before:lg:left-36 before:lg:w-1/4 md:before:w-1/5 md:before:left-28 before:mt-2 before:bg-dark after:absolute after:top-0 after:h-[1px] after:lg:right-36 after:lg:w-1/4 md:after:w-1/5 md:after:right-28 after:mt-2 after:bg-dark"
    >
      <p class="text-white text-sm">© Copyright CalibroAI</p>
      <!--
       <NuxtImg
        v-if="display"
        width="20"
        src="/images/Facebook.svg"
        class="cursor-pointer opacity-60"
      />
      <NuxtImg
        v-if="display"
        width="20"
        src="/images/Twitter.svg"
        class="cursor-pointer opacity-60"
      />
      <NuxtImg
        v-if="display"
        width="20"
        src="/images/Instagram.svg"
        class="cursor-pointer opacity-60"
      />
     -->
      <NuxtImg width="20" src="/images/linkdin.svg" class="cursor-pointer" />
    </div>
  </div>
  <NuxtImg src="/images/footer-background.svg" class="w-screen"/>
</template>

<script setup lang="ts">
const items = ref(['About Us', 'Why Choose us', 'Pricing', 'Testimonial'])
const resources = ref(['Privacy Policy', 'Terms and Condition', 'Contact Us'])
</script>

<style scoped></style>
