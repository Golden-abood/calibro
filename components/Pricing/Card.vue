<template>
  <div
    class="p-12 rounded-3xl border-[3px] border-solid"
    :class="active ? 'bg-secondary border-primary' : 'bg-black border-white'"
  >
    <div
      class="flex gap-x-6 item-center border-b-solid border-b-[1px] border-b-[#E2B98A] pb-10"
    >
      <NuxtImg :src="card?.icon" width="54" />
      <div>
        <BaseTitle
          :title="card?.title"
          class="text-2xl md:text-4xl"
          :class="active ? '!text-darken' : ''"
        />
        <BaseParagraphText
          :text="card?.description"
          :class="active ? '!text-darken' : ''"
          class="mt-[1px] !opacity-[0.6] text-base"
        />
      </div>
    </div>
    <div class="pt-8">
      <div v-for="feature in card?.features" class="flex gap-x-4 mt-6">
        <NuxtImg
          v-if="active"
          width="24"
          src="/images/pricing/done-white.svg"
        />
        <NuxtImg v-else width="24" src="/images/pricing/done-primary.svg" />
        <p
          class="text-base font-bold"
          :class="active ? 'text-darken' : 'text-white'"
        >
          {{ feature }}
        </p>
      </div>
    </div>
    <BaseParagraphText
      :text="card?.text"
      class="pt-8 text-center mx-auto text-sm md:max-w-[80%]"
      :class="active ? '!text-darken' : ''"
    />
    <div class="text-center mt-12">
      <BaseTitle
        :title="card?.price"
        :class="active ? '!text-darken' : 'text-white'"
        class="text-4xl"
      />
      <p :class="active ? '!text-darken' : 'text-white'">{{ card?.desc }}</p>
    </div>
    <BaseButton
      text="Get started"
      class="w-fit mx-auto mt-6"
      :class="active ? 'text-white ' : 'text-black'"
      :bgColor="active ? '#1D2130' : 'white'"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  card: { type: Object, require: true },
  active: { type: Boolean, required: true }
})
</script>

<style scoped></style>
