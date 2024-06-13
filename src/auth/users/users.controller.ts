import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserPresenter } from './user.presenter';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    const user = await this.usersService.create(data);

    return new UserPresenter(user);
  }
}
