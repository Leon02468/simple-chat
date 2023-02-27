import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';

import { MongooseModule } from '@nestjs/mongoose'
import { ChatService } from './services/chat/chat.service';
import { ChatController } from './controllers/chat/chat.controller';

@Module({
  imports: [],
  controllers: [AppController, ChatController],
  providers: [AppService, ChatGateway, ChatService],
})
export class AppModule {}
