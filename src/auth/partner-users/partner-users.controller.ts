import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { UserPresenter } from '../users/user.presenter';
import { UsersService } from '../users/users.service';

@Controller('partners/users')
export class PartnerUsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    const user = await this.usersService.createPartnerUser(data);

    return new UserPresenter(user);
  }
}
