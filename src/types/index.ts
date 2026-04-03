export interface Message {
    sender: string;
    content: string;
    timestamp: Date;
}

export interface Connection {
    id: string;
    address: string;
    port: number;
}