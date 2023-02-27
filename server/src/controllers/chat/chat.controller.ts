import { Controller } from '@nestjs/common';
import { ChatService } from 'src/services/chat/chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService){}
}