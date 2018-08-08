import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { from, Observable, of } from 'rxjs';
import { Logger } from '@nestjs/common';
import { map } from 'rxjs/operators';

@WebSocketGateway({ namespace: 'rooms' })
export class RoomsGateway {

  private logger = new Logger(RoomsGateway.name, false);

  @WebSocketServer() server;

  @SubscribeMessage('createRoom')
  onEvent(client: any, payload: any): Observable<WsResponse<any>> {

    this.logger.log(JSON.stringify(payload));
    // this.logger.log(client);
    // this.logger.log(this.server);
    // // this.logger.log(JSON.stringify(client.client));
    // // this.logger.log(JSON.stringify(client.server));
    // this.logger.log(JSON.stringify(client.id));
    // // this.logger.log(JSON.stringify(client.conn));
    // this.logger.log(JSON.stringify(client.room));

    const event = 'updateRoom';

    // this.broadcastMessage(event, payload);

    const response = [payload];

    // this.server.broadcast.emit(event, payload);
    // client.broadcast.emit(event, payload);

    client.emit(event, {
      message: 'Bắt đầu vào phòng!',
      room: { _id: 'room_111' },
    });

    client.broadcast.emit(event, {
      message: 'Có room mới kìa!',
      room: { _id: 'room_111' },
    });

    return null;
    // return from(response)
    //   .pipe(
    //     map(data => ({ event, data })),
    //   );
  }

  @SubscribeMessage('joinRoom')
  onJoinRoomEvent(client: any, payload: any): Observable<WsResponse<any>> {

    this.logger.log(`prepare ${JSON.stringify(payload)}`);
    client.join(payload.roomId);
    this.logger.log('completed');

    return null;
  }

  @SubscribeMessage('newMessage')
  onNewMsgEvent(client: any, payload: any): Observable<WsResponse<any>> {

    this.logger.log(`prepare ${JSON.stringify(payload)}`);
    const room = payload.roomId;
    client.broadcast.to(room).emit('addMessage', payload);
    this.logger.log('completed');

    return null;
  }
}
