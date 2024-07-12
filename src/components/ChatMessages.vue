<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chatRef">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages"
                  :key="message.id"
                  v-bind="message"/>
      <WritingMessage v-if="loader"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from "@/components/ChatBubble.vue";
import type {ChatMessage} from "@/interfaces/chat-message.interface";
import WritingMessage from "@/components/WritingMessage.vue";
import {useChat} from "@/composables/useChat";
import {ref, watch} from "vue";

interface Props {
  messages: ChatMessage[]
}

const {messages} = defineProps<Props>()

const {loader} = useChat()

const chatRef = ref<HTMLDivElement | null>()

watch(messages, () => {
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