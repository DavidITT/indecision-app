<template>
  <div class="relative" ref="target">
    <button class="text-primary flex space-x-1" @click="toggleMenu">
      <span class="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
      <span class="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
      <span class="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
    </button>
    <div class="z-10 absolute top-2 right-0 text-gray-800 mt-4 w-40 bg-white rounded-md shadow-inner" v-if="menu">
      <ul class="p-2 text-sm text-gray-700">
        <li>
          <span class="block px-4 py-2 hover:bg-gray-100">Find</span>
        </li>
        <li>
          <span class="block px-4 py-2 hover:bg-gray-100" @click="clearChat">Clear Chat</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const menu = ref<Boolean>(false);
const target = ref(null)

onClickOutside(target, () => {
  if(menu.value) menu.value = false
})

const toggleMenu = () => {
  menu.value = !menu.value;
};

</script>

<style scoped>

</style>