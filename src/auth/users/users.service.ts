import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserRoles } from './dto/user-roles';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  create(data: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        roles: [UserRoles.PARTNER],
      },
    });
  }
}
