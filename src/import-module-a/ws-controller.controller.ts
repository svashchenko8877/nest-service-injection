import {Controller, Get} from '@nestjs/common';
import {WebSocketService} from "../shared-service/websocket.service";

@Controller('')
export class WsControllerController {
    constructor(private readonly wsService: WebSocketService) {}

    @Get('get-created-date')
    getDate() {
        const createdAt = this.wsService.createdAtDate;
        return { createdAt };
    }
}
