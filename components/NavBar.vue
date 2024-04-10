<template>
  <div class="min-h-16 bg-black">
    <nav class="flex justify-between items-center py-7 md:py-5 container">
      <NuxtImg width="140" src="/images/logo.png" class="cursor-pointer" />
      <div class="flex items-center gap-x-8">
        <ul class="hidden lg:flex gap-x-8">
          <li v-for="link in links" class="cursor-pointer">
            <nuxt-link
              class="text-white text-base font-semibold transition-colors hover:text-primary"
              :to="
                link === 'Home' ? '/' : link === 'About Us' ? 'about-us' : link.toLowerCase()
              "
              >{{ link }}</nuxt-link
            >
          </li>
        </ul>
        <BaseButton text="Free trial" class="hidden lg:block" />
        <nav class="lg:hidden flex items-center justify-between z-40">
          <div>
            <Icon
              :name="
                showMenu
                  ? 'line-md:close'
                  : 'line-md:close-to-menu-alt-transition'
              "
              size="30"
              color="white"
              class="relative z-50 cursor-pointer"
              @click="showMenu = !showMenu"
            />
            <transition name="fade">
              <mobile-menu
                v-if="showMenu"
                @close="showMenu = false"
              ></mobile-menu>
            </transition>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const links = ref(['Home', 'Product', 'Pricing', 'About Us', 'FAQ', 'Contact'])
const showMenu = ref(false)
</script>

<style lang="scss" scoped></style>
