<template>
  <div class="container lg:px-32 py-16">
    <div class="text-center lg:text-start">
      <BaseTitle title="Drop us a message" class="text-3xl md:text-4xl" />
      <BaseParagraphText
        text="We will get back to you as soon as possible."
        class="text-lg pt-4"
      />
    </div>
    <div class="lg:flex justify-start gap-x-10 xl:gap-x-64 pt-14">
      <form>
        <div class="lg:flex gap-x-4">
          <BaseTextInput placeholder="Full Name" class="w-full lg:w-72 mb-2" />
          <BaseTextInput
            placeholder="Company Name"
            class="w-full lg:w-72 mb-2"
          />
        </div>

        <div class="mb-2">
          <BaseTextInput placeholder="Work Email" class="w-full" />
        </div>

        <div class="mb-2">
          <BaseTextInput placeholder="Subject" class="w-full" />
        </div>

        <div class="lg:mt-28">
          <BaseTextInput placeholder="Message" class="w-full" />
        </div>

        <BaseButton
          text="Send"
          bgColor="#ec912b"
          :block="true"
          class="mt-5 text-center lg:text-start text-white"
        />
      </form>
      <div class="pt-10 lg:pt-0">
        <div v-for="item in items" class="flex items-center gap-x-6 mb-9">
          <NuxtImg width="48" :src="item.icon" class="cursor-pointer" />
          <div>
            <BaseTitle :title="item.title" />
            <BaseParagraphText :text="item.text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    icon: '/images/contact/icon-1.svg',
    title: '+ 1800 145 276',
    text: 'Free support'
  },
  {
    icon: '/images/contact/icon-2.svg',
    title: 'finsweet@gmail.com',
    text: 'Help Email support'
  },
  {
    icon: '/images/contact/icon-3.svg',
    title: 'sales@finsweet.com',
    text: 'Sales Enquiry'
  }
])
</script>

<style scoped></style>
