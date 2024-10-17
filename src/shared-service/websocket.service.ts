import { Injectable } from '@nestjs/common';
import * as WebSocket from 'ws';

@Injectable()
export class WebSocketService {
    private createdAt: Date = new Date();
    private ws: WebSocket;

    constructor() {
        this.ws = new WebSocket('wss://echo.websocket.org/');
        this.ws.on('open', () => {
            this.createdAt = new Date();
            console.log(`I was created at ${this.createdAt}`);
        });
    }

    get createdAtDate() {
        return this.createdAt;
    }
}
