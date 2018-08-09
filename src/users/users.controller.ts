import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('/api/users')
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @Get('/')
  getAllUsers() {
    return this.userService.findAll();
  }

  @Post('/')
  createNewUser(@Body() user: User) {
    return this.userService.insertUser(user);
  }
}
