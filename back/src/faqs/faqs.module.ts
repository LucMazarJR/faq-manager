import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqSchema } from './schemas/faq.schema';
import { EmbeddingService } from '../embedding/embedding.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Faq', schema: FaqSchema }])],
  controllers: [FaqsController],
  providers: [FaqsService, EmbeddingService],
})
export class FaqsModule {}
