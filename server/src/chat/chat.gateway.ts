import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class ChatGateway {
  @WebSocketServer() server

  handleConnection(client: any, ...args: any[]){
    console.log(`Client ${client.id} connected`)
  }

  handleDisconnect(client: any, ...args: any[]){
    console.log(`Client ${client.id} disconnected`)
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    const roomID = payload.roomID;
    console.log('message', payload);
    this.server.emit('message-' + roomID, payload);
    return 'Hello world!'
  }
}
