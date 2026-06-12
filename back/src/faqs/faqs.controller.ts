import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FaqsService } from './faqs.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Controller('faqs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Post()
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqsService.create(createFaqDto);
  }

  @Post('bulk')
  CreateMany(@Body() createManyFaqDto: CreateFaqDto[]) {
    return this.faqsService.createMany(createManyFaqDto);
  }

  @Get()
  findPaginated(
    @Query('pageSize') pageSize: number,
    @Query('page') page: number,
  ) {
    return this.faqsService.findPaginated(page, pageSize);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.faqsService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqsService.update(id, updateFaqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqsService.remove(id);
  }
}
