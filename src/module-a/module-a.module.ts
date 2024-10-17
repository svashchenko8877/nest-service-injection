import { Module } from '@nestjs/common';
import {WebSocketService} from "../shared-service/websocket.service";

@Module({
    providers: [WebSocketService],
})
export class ModuleAModule {}
