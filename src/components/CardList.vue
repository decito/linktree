<script setup lang="ts">
import { items } from '@/storage'
</script>

<template>
  <section class="mx-auto flex w-full flex-col gap-4 text-gray-100 md:w-4/6">
    <CardItem v-for="item in items" :key="item.name" :item="item" />
  </section>
</template>
