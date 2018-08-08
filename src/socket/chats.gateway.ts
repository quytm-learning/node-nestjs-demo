import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { from, Observable, of } from 'rxjs';
import { Logger } from '@nestjs/common';
import { map } from 'rxjs/operators';

@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway {

  private logger = new Logger(ChatsGateway.name, false);

  @SubscribeMessage('joinRoom')
  onJoinRoomEvent(client: any, payload: any): Observable<WsResponse<any>> {

    client.join(payload.roomId);

    return null;
  }

  @SubscribeMessage('newMessage')
  onNewMsgEvent(client: any, payload: any): Observable<WsResponse<any>> {

    const room = payload.roomId;
    client.broadcast.to(room).emit('addMessage', payload);

    return null;
  }
}
