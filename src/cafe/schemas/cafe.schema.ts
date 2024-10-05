import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CafeDocument = HydratedDocument<Cafe>;

@Schema()
export class Cafe {
  @Prop({ required: true })
  name: string;
}

export const CafeSchema = SchemaFactory.createForClass(Cafe);
