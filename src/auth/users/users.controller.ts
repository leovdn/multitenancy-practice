import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(usersService: UsersService) {
    this.createUser()
  }

  @Get()
  getUsers() {
    return {
      name: 'Lev',
      age: 18
    }
  }

  createUser() {
    return 'Create an user'
  }
}