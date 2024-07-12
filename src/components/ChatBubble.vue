<template>

  <!-- Example Message -->
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs relative">
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
      {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs relative">
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
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md">
    </div>
  </div>



</template>

<script setup lang="ts">


interface Props {
  message: string
  itsMine: boolean
  image?: string
}

defineProps<Props>()


</script>

<style scoped>

</style>