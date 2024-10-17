import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { ExportModuleAModule } from './export-module-a/export-module-a.module';
import { ImportModuleAModule } from './import-module-a/import-module-a.module';
import { ErrorsLayerModule } from './errors-layer/errors-layer.module';

@Module({
  imports: [ModuleAModule, ModuleBModule, ExportModuleAModule, ImportModuleAModule, ErrorsLayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
