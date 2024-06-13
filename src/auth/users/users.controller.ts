import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }
}
