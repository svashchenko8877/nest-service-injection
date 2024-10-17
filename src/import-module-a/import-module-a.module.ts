import { Module } from '@nestjs/common';
import {ExportModuleAModule} from "../export-module-a/export-module-a.module";
import {WsControllerController} from "./ws-controller.controller";

@Module({
    imports: [ExportModuleAModule],
    controllers: [WsControllerController]
})
export class ImportModuleAModule {}
