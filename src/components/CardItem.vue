<script setup lang="ts">
import type { CardTypes } from '@/types'
defineProps<{
  cardClass: CardTypes
  iconClass: string
  name: string
  username: string
  link: string
}>()
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="flex items-center gap-6 rounded border border-gray-500 bg-gray-700 px-6 py-4 transition-colors"
    :class="`card-${cardClass}`"
  >
    <i class="fa-2x" :class="iconClass"></i>
    <div>
      <h3 class="text-lg font-semibold">{{ name }}</h3>

      <p>@{{ username }}</p>
    </div>
  </a>
</template>
