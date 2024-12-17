<template>
  <div class="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-150px)]" ref="chatRef">
  <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages"
                  :key="message.id"
                  v-bind="message"/>
      <WritingMessage v-if="loader === true"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from "@/components/ChatBubble.vue";
import WritingMessage from "@/components/WritingMessage.vue";
import {ref, watch} from "vue";
import {useChat} from "@/composables/useChat";

const {messages, loader} = useChat()

const chatRef = ref<HTMLDivElement | null>()

watch(messages.value, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top:chatRef.value?.scrollHeight,
      behavior:'smooth'
    })
  }, 100)
})

</script>

<style scoped>

</style>