import { Module } from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FaqSchema } from './schemas/faq.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Faqs', schema: FaqSchema }])],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}
