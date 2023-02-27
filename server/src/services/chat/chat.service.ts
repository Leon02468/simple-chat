import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from 'src/schemas/chat.schema';

@Injectable()
export class ChatService {
    constructor(@InjectModel(Chat.name) private userModel: Model<ChatDocument>){}
}
