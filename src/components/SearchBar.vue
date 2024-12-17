<template>
  <div class="bg-white p-2">
    <form class="flex items-center justify-end w-full"  @submit.prevent="handleSearch">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
          <svg role="button" @click="toggleSearch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        <input type="text" id="simple-search"
               class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:outline focus:outline-blue-400 block w-full ps-10 p-2.5"
               placeholder="Search messages..."
               v-model="searchQuery"
               @input="handleSearch" />
      </div>
    </form>
  </div>

</template>

<script setup lang="ts">

import {useChat} from "@/composables/useChat";
import {ref} from "vue";

const {toggleSearch, searchMessages} = useChat()
const searchQuery = ref('');

const handleSearch = () => {
  searchMessages(searchQuery.value);
};

</script>

<style scoped>

</style>