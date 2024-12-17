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
                highlighted: false
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
                highlighted: false
            })
        },

        toggleMenu: function (status?:boolean) {
            if(status){
                this.menuState = false;
            }else{
                this.menuState = !this.menuState;
            }
        },

        toggleSearch: function () {
            this.searchBar = !this.searchBar;

            if (!this.searchBar) {
                this.searchQuery = '';
                this.messages.forEach(msg => {
                    msg.highlighted = false;
                });
            }

            this.toggleMenu()
        },

        clearChat: function () {
            this.messages = []
            this.toggleMenu(false)
            this.searchQuery = ''
            this.toggleSearch()
        },

        searchMessages(query: string) {
            this.searchQuery = query
            this.messages.forEach(msg => {
                msg.highlighted = false;
            });

            if (query.trim() === '') return;

            this.messages.forEach(msg => {
                if (msg.message.toLowerCase().includes(query.toLowerCase())) {
                    msg.highlighted = true;
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
    },
})