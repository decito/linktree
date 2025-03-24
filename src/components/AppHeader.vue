<script setup lang="ts">
import DialogShare from './DialogShare.vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <header class="flex w-full items-center justify-between pt-6">
    <button
      type="button"
      class="flex size-12 items-center justify-center gap-4 rounded-full bg-button p-4 text-foreground transition-colors duration-300 hover:bg-button-hover"
    >
      <a href="https://github.com/decito/linkhub" target="_blank">
        <i class="fab fa-github fa-xl" />
      </a>
    </button>
    <button
      type="button"
      class="flex size-12 items-center justify-center rounded-full bg-button p-4 text-foreground transition-colors duration-300 hover:bg-button-hover"
      @click="open = true"
    >
      <template v-if="false">
        <!-- TODO: verificar como usar o menu de contexto dos dispositivos -->
        <!-- <i class="fas fa-up-right-from-square"></i> -->
      </template>
      <i class="fas fa-arrow-up-from-bracket" />
    </button>
    <Teleport to="#dialog-container">
      <DialogShare v-if="open" :open="open" @close-modal="open = false" />
    </Teleport>
  </header>
</template>
