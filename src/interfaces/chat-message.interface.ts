export interface ChatMessage {
    id: number
    itsMine: boolean
    message: string
    image?: string
    highlighted?: boolean;
    active: boolean;
}