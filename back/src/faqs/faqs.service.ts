import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Faq } from './schemas/faq.schema';
import { EmbeddingService } from '../embedding/embedding.service';

@Injectable()
export class FaqsService {
  constructor(
    @InjectModel('Faq') private faqModel: Model<Faq>,
    private readonly embeddingService: EmbeddingService,
  ) {}

  async create(createFaqDto: CreateFaqDto) {
    try {
      const embedding = await this.embeddingService.embeddingToSave({
        content: createFaqDto.question,
        title: createFaqDto.title,
      });
      const payload = { ...createFaqDto, embedding };

      return this.faqModel.insertOne(payload);
    } catch (e) {
      console.log(e);
    }
  }

  createMany(createManyFaqDto: CreateFaqDto[]) {
    return this.faqModel.insertMany(createManyFaqDto);
  }

  findPaginated() {
    return this.faqModel.find();
  }

  findOneById(id: string) {
    return this.faqModel.findById(id);
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.faqModel.findByIdAndUpdate(id, updateFaqDto);
  }

  remove(id: string) {
    return this.faqModel.findByIdAndDelete(id);
  }
}
