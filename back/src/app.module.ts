import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaqsModule } from './faqs/faqs.module';
import { HealthResponse } from './dto/health.dto';

@Module({
  imports: [FaqsModule, HealthResponse],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
