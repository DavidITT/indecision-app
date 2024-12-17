<template>
  <div class="flex items-center justify-between p-4 bg-card text-card-foreground border-b border-border bg-white">
    <div class="inline-flex gap-3 items-center">
      <img class="w-10 h-10 rounded-full border border-blue-300" src="https://gravatar.com/avatar/9a89865235002c16212eb8e47989e5dd?s=400&d=robohash&r=x" alt="Profile img">
    </div>
   <ChatMenu/>
  </div>
  <SearchBar v-if="searchbar"/>
</template>

<script setup lang="ts">

import ChatMenu from "@/components/ChatMenu.vue";
import SearchBar from "@/components/SearchBar.vue";
import {useChat} from "@/composables/useChat";

const {searchbar} = useChat()

</script>

<style scoped>

</style>