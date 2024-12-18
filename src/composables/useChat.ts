import {useChatStore} from "@/stores/useChatStore";
import {computed} from "vue";

export const useChat = () => {

    const store = useChatStore()

    return {
        clearChat: () => store.clearChat(),
        handleMenu: (status: boolean) => store.handleMenu(status),
        handleSearch: (status: boolean) => store.handleSearch(status),
        searchMessages: (message: string) => store.searchMessages(message),
        navigateHighlights: (direction: 'up'|'down') => store.navigateHighlights(direction),
        updateHighlightedMessages: () => store.updateHighlightedMessages(),
        messages: computed(() => store.getMessages),
        loader: computed(() => store.getLoader),
        menu: computed(() => store.getMenuState),
        searchbar: computed(() => store.getSearchBar),
        searchQuery: computed(() => store.searchQuery),
        hasHighlightedMessages: computed(() => store.hasHighlightedMessages),
    }
}