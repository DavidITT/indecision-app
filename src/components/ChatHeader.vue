<template>
  <div class="flex items-center justify-between p-4 bg-card text-card-foreground border-b border-border bg-white">
    <div class="inline-flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      <img class="w-10 h-10 rounded-full border border-blue-300" src="/public/imgs/profile-photos/goku-profile.png" alt="Profile img">
      <h1 class="text-xl font-semibold">Goku</h1>
    </div>
   <ChatMenu/>
  </div>
</template>

<script setup lang="ts">

import ChatMenu from "@/components/ChatMenu.vue";
</script>

<style scoped>

</style>