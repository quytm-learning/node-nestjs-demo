import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {

  private logger: Logger = new Logger(RoomsService.name, false);

  constructor(
    @Inject('RoomRepositoryToken')
    private readonly roomRepository: Repository<Room>,
  ) {
  }

  findAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  createNewRoom(newRoom: Room): Promise<Room> {

    return this.roomRepository

    // Find leftUser and rightUser in rooms
      .createQueryBuilder()
      .where(
        '(leftUser = :left AND rightUser = :right)' + 'OR (leftUser = :right AND rightUser = :left)',
        { left: newRoom.leftUser, right: newRoom.rightUser },
      )
      .getOne()

      // Check: leftUser and rightUser are joined in a room?
      .then((room: Room) => {
        if (room) {

          this.logger.warn(`Room for ${room.leftUser} and ${room.rightUser} is existed`);
          return Promise.resolve(room);

        } else {

          this.logger.log(`New Room is created: ${room}`);
          return this.roomRepository.save(newRoom);

        }
      })
      .catch(err => {
        this.logger.error(`Cannot check room existed`);
        return Promise.reject(err);
      });

  }
}
