import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.entity';

@Controller('/api/rooms')
export class RoomsController {

  constructor(private roomService: RoomsService) {
  }

  @Get('/')
  getAllRooms() {
    return this.roomService.findAll();
  }

  @Post('/')
  createNewRoom(@Body() room: Room) {
    return this.roomService.createNewRoom(room);
  }

}
