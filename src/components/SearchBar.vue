<template>
  <div class="bg-white p-2">
    <form class="flex items-center justify-between space-x-3" @submit.prevent="search">
      <div class="relative w-full">
        <div class="absolute inset-y-0 end-0 flex items-center pr-3 text-gray-500">
          <svg @click="handleSearch(false)" role="button" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
               viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-3.5 h-3.5">
            <path
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
          </svg>
        </div>
        <input type="text" id="simple-search"
               class="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:outline focus:outline-blue-400 block w-full ps-4 p-2"
               placeholder="Search messages..."
               v-model="query"
               @input="search"/>
      </div>
      <template v-if="hasHighlightedMessages">
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg @click="navigate('up')"
             fill="#000000" class="w-3.5 h-3.5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
          l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
          C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
        </svg>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg @click="navigate('down')"
             fill="#000000" class="w-3.5 h-3.5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
      </template>
    </form>
  </div>

</template>

<script setup lang="ts">

import {useChat} from "@/composables/useChat";
import {ref} from "vue";

const {searchMessages, handleSearch, navigateHighlights, hasHighlightedMessages} = useChat()
const query = ref('');


const navigate = (direction: 'up' | 'down') => {
  navigateHighlights(direction)
}

const search = () => {
  searchMessages(query.value);
};

</script>

<style scoped>

</style>