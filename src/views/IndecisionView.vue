<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-screen-sm mx-auto">
    <ChatHeader/>
    <ChatMessages :messages="messages"/>
    <MessageBox @send-message="onMessage"/>
  </div>
</template>

<script setup lang="ts">
import ChatMessages from "@/components/ChatMessages.vue";
import ChatHeader from "@/components/ChatHeader.vue";
import MessageBox from "@/components/MessageBox.vue";
import {useChat} from "@/composables/useChat";

const {messages, loader, onMessage} = useChat()

</script>
