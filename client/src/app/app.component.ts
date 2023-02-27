import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatModel } from './models/chat.model';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  chat$!: Observable<any>;
  messages: any[] = [];

  userName: string = '';
  roomID: string = '';
  newMessage: string = '';

  constructor(private chatService: ChatService){}

  joinRoom(roomID: string){
    if(roomID && this.userName){
      console.log('Already joined in: ' + roomID);
      this.chat$ = this.chatService.getMessagesByRoomID(roomID);
      this.chat$.subscribe((message: any) => {this.messages.push(message)})
    }else{
      window.alert('Please fill in the room id and your name!')
    }
  }

  sendMessage(message: string){
    let now = new Date();
    let newMessageData: ChatModel = {
      roomID: this.roomID,
      msg: message,
      date: now,
      from: this.userName
    }
    this.chatService.sendMessageByRoom(newMessageData)
  }
}
