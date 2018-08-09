import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import * as _ from 'lodash';

@Controller('/api/rooms')
export class RoomsController {

  constructor(private roomService: RoomsService) {
  }

  @Get('/')
  getAllRooms(@Query('userId') userId) {
    if (_.isEmpty(userId)) {
      return this.roomService.findAll();
    } else {
      return this.roomService.findAllRoomByUserId(userId);
    }
  }

  @Post('/')
  createNewRoom(@Body() room: Room) {
    return this.roomService.createNewRoom(room);
  }

}
