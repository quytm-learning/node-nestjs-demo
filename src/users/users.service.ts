import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepository: Repository<User>,
  ) {
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  insertUser(newUser): Promise<User> {
    return this.userRepository.findOne({ email: newUser.email })
      .then((user: User) => {
        if (user) {
          return Promise.reject(`User's email ${user.email} is existed`);
        } else {
          return this.userRepository.save(newUser);
        }
      });
  }

}
