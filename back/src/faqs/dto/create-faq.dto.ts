import {
  IsArray,
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateFaqDto {
  @IsString()
  @IsNotEmpty()
  question!: string;

  @IsString()
  @IsNotEmpty()
  answer!: string;

  @IsNotEmpty()
  category!: string;

  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @IsString()
  source!: string;

  @IsIn(['draft', 'review', 'published', 'archived'])
  status!: 'draft' | 'review' | 'published' | 'archived';

  @IsDate()
  reviewAfter?: Date;

  @IsString()
  @IsNotEmpty()
  createdBy!: string;

  @IsString()
  updatedBy?: string;

  @IsString()
  @IsNotEmpty()
  embeddingModel!: string;

  @IsNumber()
  @IsNotEmpty()
  embeddingDimensions!: number;
}
