import {defineStore} from 'pinia'
import {sleep} from "@/helpers/sleep";
import type {YesNoResponse} from "@/interfaces/yes-no-iresponse";
import type {ChatMessage} from "@/interfaces/chat-message.interface";

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: <ChatMessage[]>[],
        menuState: <boolean>false,
        searchBar: <boolean>false,
        loader: <boolean>false,
        searchQuery: <string>'',
        currentHighlightIndex: <number>-1,
    }),
    actions: {

        async getHerResponse() {
            const res = await fetch('https://yesno.wtf/api')
            return (await res.json()) as YesNoResponse
        },

        async onMessage(message: string) {
            if (message.length === 0) return

            this.messages.push({
                id: new Date().getTime(),
                itsMine: true,
                message,
                highlighted: false,
                active: false
            })

            if (!message.endsWith('?')) return

            this.loader = true
            await sleep(3)
            this.loader = false

            const {answer, image} = await this.getHerResponse()

            this.messages.push({
                id: new Date().getTime(),
                itsMine: false,
                image: image,
                message: answer,
                highlighted: false,
                active: false
            })
        },

        handleMenu: function (status: boolean) {
            this.menuState = status;
        },

        handleSearch: function (status: boolean) {
            this.searchBar = status;
        },

        clearChat: function () {
            this.messages = []
            this.searchQuery = ''
            this.handleMenu(false)
            this.handleSearch(false)
        },

        searchMessages(query: string) {
            this.searchQuery = query
            this.messages.forEach(msg => {
                msg.highlighted = false;
                msg.active = false
            });

            if (query.trim() === '') return;

            this.updateHighlightedMessages()
        },

        navigateHighlights(direction: 'up' | 'down') {
            const highlightedMessages = this.messages.filter(msg => msg.highlighted);
            if (highlightedMessages.length === 0) return;

            if (direction === 'up') {
                this.currentHighlightIndex =
                    this.currentHighlightIndex <= 0
                        ? highlightedMessages.length - 1
                        : this.currentHighlightIndex - 1;
            } else {
                this.currentHighlightIndex =
                    this.currentHighlightIndex >= highlightedMessages.length - 1
                        ? 0
                        : this.currentHighlightIndex + 1;
            }


            this.messages.forEach(msg => {
                msg.active = false;
            });


            const currentMessage = highlightedMessages[this.currentHighlightIndex];

            if (currentMessage) {
                currentMessage.active = true;

                const messageElement = document.querySelector(`[id="${currentMessage.id}"]`);
                if (messageElement) {
                    messageElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });

                    setTimeout(() => {
                        currentMessage.active = false;
                    }, 1000);
                }
            }
        },

        updateHighlightedMessages() {
            this.messages.forEach(msg => {
                if (msg.message.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                    msg.highlighted = true
                }
            });
        },

    },
    getters: {
        getMessages: (state) => state.messages,
        getLoader: (state) => state.loader,
        getMenuState: (state) => state.menuState,
        getSearchBar: (state) => state.searchBar,
        getSearchQuery: (state) => state.searchQuery,
        hasHighlightedMessages: (state) => state.messages.some(msg => msg.highlighted),
    },
})