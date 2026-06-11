import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Faq } from './schemas/faq.schema';

@Injectable()
export class FaqsService {
  constructor(@InjectModel('Faq') private faqModel: Model<Faq>) {}

  create(createFaqDto: CreateFaqDto) {
    return this.faqModel.insertOne(createFaqDto);
  }

  createMany(createManyFaqDto: CreateFaqDto[]) {
    return this.faqModel.insertMany(createManyFaqDto);
  }

  findPaginated() {
    return this.faqModel.find();
  }

  findOneById(id: number) {
    return this.faqModel.findById(id);
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return this.faqModel.findByIdAndUpdate(id, updateFaqDto);
  }

  remove(id: number) {
    return this.faqModel.findByIdAndDelete(id);
  }
}
