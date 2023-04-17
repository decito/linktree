<script setup lang="ts">
import type { CardItem } from '@/types'

defineProps<{
  item: CardItem
}>()
</script>

<template>
  <a
    :href="item.link"
    target="_blank"
    class="flex items-center gap-6 rounded border border-gray-500 bg-gray-700 px-6 py-4 transition-colors"
    :class="`card-${item.type}`"
  >
    <i class="fa-2x" :class="item.icon"></i>
    <div>
      <h3 class="text-lg font-semibold">{{ item.name }}</h3>

      <p>@{{ item.username }}</p>
    </div>
  </a>
</template>
