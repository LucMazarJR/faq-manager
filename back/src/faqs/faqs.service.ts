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
    return 'This action adds a new faq';
  }

  createMany(createManyFaqDto: CreateFaqDto[]) {
    return 'Adiciona varias faqs';
  }

  findAll() {
    return `This action returns all faqs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faq`;
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}
