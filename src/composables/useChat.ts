import {ref} from "vue";
import type {ChatMessage} from "@/interfaces/chat-message.interface";
import type {YesNoResponse} from "@/interfaces/yes-no-iresponse";
import {sleep} from "@/helpers/sleep";

const loader = ref<boolean>(false)

export const useChat = () => {

    const messages = ref<ChatMessage[]>([])

    const onMessage = async (message: string) => {
        if(message.length === 0 ) return

        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message
        })

        if(!message.endsWith('?')) return

        loader.value = true
        await sleep(3)
        loader.value = false

        const {answer, image} = await getHerResponse()

        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            image: image,
            message: answer
        })
    }

    const getHerResponse = async () => {
        const res = await fetch('https://yesno.wtf/api')
        const data = (await res.json()) as YesNoResponse
        return data
    }

    return {
        //properties
        messages,
        loader,
        //methods
        onMessage
    }
}