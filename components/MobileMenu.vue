<template>
  <div
    class="fixed top-0 left-0 z-30 flex-col items-center w-screen h-screen overflow-hidden mobile-nav"
  >
    <div class="block my-24" @click="pushRouter('/')">
      <img class="mx-auto cursor-pointer" src="/images/logo.png" alt="" />
    </div>

    <div class="flex flex-col items-center justify-center gap-y-10">
      <div
        class="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-1"
        @click="pushRouter('Product')"
      >
        Product
      </div>

      <div
        class="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-2"
        @click="pushRouter('Pricing')"
      >
        Pricing
      </div>

      <div
        class="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-3"
        @click="pushRouter('about-us')"
      >
        About Us
      </div>
      <div
        class="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-4"
        @click="pushRouter('FAQ')"
      >
        FAQ
      </div>
      <div
        class="text-3xl font-bold text-white opacity-0 cursor-pointer nav-link-5"
        @click="pushRouter('Contact')"
      >
        Contact
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const emit = defineEmits(['close'])

// prevent body scrolling when mobile nav is opened
onMounted(() => {
  document.querySelector('body').classList.add('overflow-hidden')
})
onUnmounted(() => {
  document.querySelector('body').classList.remove('overflow-hidden')
})

// router push
const pushRouter = route => {
  // push router
  router.replace(`/${route}`)

  // close menu
  emit('close')
}
</script>

<style scoped>
.mobile-nav {
  overflow-y: hidden;
}
.mobile-nav::after {
  /* content: ''; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  z-index: -1;
}

.mobile-nav {
  backdrop-filter: blur(15px);
}

.nav-link-1 {
  animation: link-animate 0.75s forwards ease-in-out;
}

.nav-link-2 {
  animation: link-animate 0.75s forwards 0.15s ease-in-out;
}

.nav-link-3 {
  animation: link-animate 0.75s forwards 0.3s ease-in-out;
}

.nav-link-4 {
  animation: link-animate 0.75s forwards 0.5s ease-in-out;
}
.nav-link-5 {
  animation: link-animate 0.75s forwards 0.7s ease-in-out;
}
@keyframes link-animate {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
