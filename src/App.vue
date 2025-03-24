<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import { Analytics } from '@vercel/analytics/react'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import InfoDiv from './components/InfoDiv.vue'

const mode = useColorMode()
mode.value = 'dark'
</script>

<template>
  <main class="mx-auto flex h-screen max-w-2xl flex-col items-center justify-between px-2 sm:px-4">
    <AppHeader />
    <RouterView />
    <AppFooter />
    <InfoDiv />
    <Analytics />
  </main>
</template>
