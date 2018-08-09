import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {

  private logger: Logger = new Logger(MessagesService.name, false);

  constructor(
    @Inject('MessageRepositoryToken')
    private messageRepository: Repository<Message>,
  ) {
  }

  findAllMessage(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  addNewMessage(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
  }

}
