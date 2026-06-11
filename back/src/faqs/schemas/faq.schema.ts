import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FaqDocument = HydratedDocument<Faq>;

@Schema({ timestamps: true, collection: 'faqs' })
export class Faq {
  @Prop({ required: true })
  question!: string;

  @Prop({ required: true })
  answer!: string;

  @Prop({ required: true, lowercase: true, trim: true })
  category!: string;

  @Prop({ type: [String], default: [], lowercase: true })
  tags!: string[];

  @Prop({ default: '' })
  source!: string;

  @Prop({
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft',
  })
  status!: string;

  @Prop()
  reviewAfter!: Date;

  @Prop({ required: true })
  createdBy!: string;

  @Prop()
  updatedBy!: string;

  @Prop({ type: [Number], default: null })
  embedding!: number[];

  @Prop({ required: true })
  embeddingModel!: string;

  @Prop({ required: true })
  embeddingDimensions!: number;
}

export const FaqSchema = SchemaFactory.createForClass(Faq);
