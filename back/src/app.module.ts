import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaqsModule } from './faqs/faqs.module';
import { HealthResponse } from './dto/health.dto';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmbeddingService } from './embedding/embedding.service';
import { EmbeddingModule } from './embedding/embedding.module';

@Module({
  imports: [
    FaqsModule,
    HealthResponse,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    EmbeddingModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmbeddingService],
})
export class AppModule {}
