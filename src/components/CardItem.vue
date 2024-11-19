<script setup lang="ts">
import type { CardItem } from '@/types'
import { switchUserAvatarOutlineColor } from '@/helpers'

defineProps<{ item: CardItem }>()
</script>

<template>
  <a
    :href="item.link"
    target="_blank"
    :class="`card-${item.type} bg-${item.type === 'instagram' ? 'instagram-gradient' : item.type} card-item mx-auto flex w-full max-w-2xl transform-gpu items-center rounded-full px-8 py-2 text-white transition-transform duration-200 ease-out hover:scale-105`"
    @mouseenter="switchUserAvatarOutlineColor(item.type)"
  >
    <i class="fa-xl" :class="item.icon" />
    <div class="w-full break-words px-6">
      <h3 class="font-semibold">{{ item.name }}</h3>
      <p class="text-sm font-medium">@{{ item.username }}</p>
    </div>
  </a>
</template>
