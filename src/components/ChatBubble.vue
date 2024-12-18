<template>

  <!-- Example Message -->
  <div :id="String(id)"
       v-if="itsMine"
       :class="[
      'flex justify-end transition-opacity duration-300 ease-in-out',
      {'active': active }]">
    <div :class="[
        'bg-blue-200 text-black p-2 rounded-lg max-w-xs relative',
        { 'bg-blue-200': highlighted }
      ]">
      <svg class="absolute right-0 -mr-2 -bottom-1 h-full text-blue-200" width="9px" height="16px" viewBox="0 0 9 16"
           version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="currentColor">
            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
              <g id="Group-2" transform="translate(24.000000, 0.000000)">
                <polygon id="Triangle"
                         transform="translate(4.500000, 62.000000) rotate(90.000000) translate(-4.500000, -62.000000)"
                         points="4.5 57.5 -3.5 66.5 12.5 66.5"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div v-html="highlightedMessage"></div>
    </div>
  </div>

  <!-- Example Received Message -->
  <div :id="String(id)"
       v-else :class="[
      'flex gap-2 transition-opacity duration-300 ease-in-out',
       {'active': active }]">
    <img class="w-10 h-10 rounded-full border border-blue-300" src="/public/imgs/profile-photos/goku-profile.png"
         alt="Profile img">
    <div :class="[
        'bg-gray-300 text-black p-2 rounded-lg max-w-xs relative',
        { 'bg-gray-300': highlighted }
      ]">
      <svg class="absolute left-0 -ml-2 -bottom-1 h-full text-gray-300" width="9px" height="16px" viewBox="0 0 9 16"
           version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="currentColor">
            <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
              <g id="Group-2" transform="translate(24.000000, 0.000000)">
                <polygon id="Triangle"
                         transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000)"
                         points="4.5 57.5 12.5 66.5 -3.5 66.5"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div v-html="highlightedMessage"></div>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md">
    </div>
  </div>

</template>

<script setup lang="ts">


import {useChat} from "@/composables/useChat";
import {computed} from "vue";

interface Props {
  id: any,
  message: string
  itsMine: boolean
  image?: string
  highlighted?: boolean
  active?: boolean
}

const props = defineProps<Props>()

const {searchQuery} = useChat()

const highlightedMessage = computed(() => {
  if (!searchQuery.value) return props.message;
  const escapedQuery = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  return props.message.replace(regex, '<span class="bg-yellow-200">$1</span>');
});

</script>

<style scoped>

.active {
  animation: blink 1.5s step-start infinite;
}

@keyframes blink {
  0%, 100% {
    background-color: transparent ;
  }
  50% {
    background-color: #e2e8f0;
  }
}
</style>