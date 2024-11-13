<script setup lang="ts">
import { copyToClipboard } from '@/helpers'
</script>

<template>
  <header class="flex w-full items-center justify-between pb-16 pt-6">
    <button
      class="bg-button text-foreground hover:bg-button-hover flex size-12 items-center justify-center gap-4 rounded-full p-4 transition-colors duration-300"
    >
      <a href="https://github.com/decito/linktree" target="_blank">
        <i class="fab fa-github fa-xl" />
      </a>
    </button>
    <button
      class="bg-button text-foreground hover:bg-button-hover flex size-12 items-center justify-center rounded-full p-4 transition-colors duration-300"
      @click="copyToClipboard"
    >
      <template v-if="false">
        <!-- TODO: verificar como usar o menu de contexto dos dispositivos -->
        <!-- <i class="fas fa-up-right-from-square"></i> -->
      </template>
      <i id="clipboard-icon" class="fas fa-link" />
    </button>
  </header>
</template>
