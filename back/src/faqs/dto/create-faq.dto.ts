import {
  IsArray,
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFaqDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  question!: string;

  @IsString()
  @IsNotEmpty()
  answer!: string;

  @IsNotEmpty()
  category!: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  tags!: string[];

  @IsOptional()
  @IsString()
  source!: string;

  @IsOptional()
  @IsIn(['draft', 'review', 'published', 'archived'])
  status!: 'draft' | 'review' | 'published' | 'archived';

  @IsOptional()
  @IsDate()
  reviewAfter?: Date;

  @IsString()
  @IsNotEmpty()
  createdBy!: string;

  @IsOptional()
  @IsString()
  updatedBy?: string;

  @IsString()
  @IsNotEmpty()
  embeddingModel!: string;

  @IsNumber()
  @IsNotEmpty()
  embeddingDimensions!: number;
}
