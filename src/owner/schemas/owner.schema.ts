import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Cafe } from 'src/cafe/schemas/cafe.schema';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema({
  timestamps: true,
})
export class Owner {
  @Prop({ required: true })
  Name: string;

  @Prop({ required: true })
  Phone: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cafe' })
  Cafe: Cafe;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
