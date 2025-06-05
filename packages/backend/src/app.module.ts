import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformsModule } from './platforms/platforms.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PlatformsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
