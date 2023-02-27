
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop()
  roomID: string;

  @Prop()
  msg: number;

  @Prop({required: true})
  date: number;

  @Prop()
  from: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);