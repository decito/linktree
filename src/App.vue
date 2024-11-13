<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
mode.value = 'dark'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <InfoDiv />
</template>
