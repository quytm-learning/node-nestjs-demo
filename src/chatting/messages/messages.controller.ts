import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';

@Controller('/api/messages')
export class MessagesController {

  constructor(private messageService: MessagesService) {
  }

  @Get('/')
  getAllMessages() {
    return this.messageService.findAllMessage();
  }

  @Post('/')
  addNewMessage(@Body() message: Message) {
    return this.messageService.addNewMessage(message);
  }

}
