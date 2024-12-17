import {useChatStore} from "@/stores/useChatStore";
import {computed} from "vue";

export const useChat = () => {

    const store = useChatStore()

    return {
        clearChat: () => store.clearChat(),
        toggleMenu: () => store.toggleMenu(),
        toggleSearch: () => store.toggleSearch(),
        searchMessages: (message:string) => store.searchMessages(message),
        messages: computed(() => store.getMessages),
        loader: computed(() => store.getLoader),
        menu: computed(() => store.getMenuState),
        searchbar: computed(() => store.getSearchBar),
        searchQuery: computed(() => store.searchQuery),
    }
}