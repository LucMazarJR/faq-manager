import { Injectable, NotFoundException } from '@nestjs/common';
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
      const embedding = await this.embeddingService.embeddingOne(
        createFaqDto.question,
      );

      if (embedding) {
        const payload = { ...createFaqDto, embedding };
        console.log(payload);
        return this.faqModel.insertOne(payload);
      }
      throw new Error('Falha ao gerar embedding');
    } catch (e) {
      console.log(e);
    }
  }

  async createMany(createManyFaqDto: CreateFaqDto[]) {
    const sucessPayload: Faq[] = [];

    for (const faq of createManyFaqDto) {
      try {
        const embedding = await this.embeddingService.embeddingOne(
          faq.question,
        );
        if (embedding) {
          const data = { ...faq, embedding };
          sucessPayload.push(data);
        }
      } catch {
        break;
      }
    }

    if (sucessPayload.length === 0) {
      throw new Error('Não foi possivel processar nenhuma FAQ');
    }

    const savedFaqs = await this.faqModel.insertMany(sucessPayload);
    return {
      totalFaqs: createManyFaqDto.length,
      totalSavedFaqs: savedFaqs.length,
      savedFaqs,
    };
  }

  async findPaginated(page: number, pageSize: number) {
    const skippedDocumentsCount = page * pageSize;

    const faqs = await this.faqModel.find({}, null, {
      skip: skippedDocumentsCount,
      limit: pageSize,
    });

    if (!faqs) {
      throw new NotFoundException(
        'Não foi encontrado nenhum usuário para esses parametros',
      );
    }
    return faqs;
  }

  async findOneById(id: string) {
    const faq = await this.faqModel.findById(id);

    if (!faq) {
      throw new NotFoundException(
        'Não foi encontrada nenhuma FAQ para esse id',
      );
    }
    return faq;
  }

  update(id: string, updateFaqDto: UpdateFaqDto) {
    return this.faqModel.findByIdAndUpdate(id, updateFaqDto);
  }

  remove(id: string) {
    return this.faqModel.findByIdAndDelete(id);
  }
}
