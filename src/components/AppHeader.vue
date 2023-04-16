<script setup lang="ts">
import { copyToClipboard } from '@/helpers'
</script>

<template>
  <header class="flex w-full items-center justify-between py-10">
    <button
      class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-4"
      @click="copyToClipboard"
    >
      <template v-if="false">
        <!-- TODO: verificar como usar o menu de contexto dos dispositivos -->

        <!-- <i class="fas fa-up-right-from-square"></i> -->
      </template>

      <i id="clipboard-icon" class="fas fa-link"></i>
    </button>

    <a
      href="https://github.com/decito/linktree"
      target="_blank"
      class="flex h-16 items-center justify-center gap-4 rounded-full bg-gray-100 p-4"
    >
      <i class="fab fa-github fa-xl"></i>

      <p class="text-xl font-semibold">Code preview</p>
    </a>
  </header>
</template>
