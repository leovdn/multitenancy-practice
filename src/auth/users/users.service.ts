import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

import { UserRoles } from './dto/user-roles';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  createPartnerUser(data: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.PARTNER],
      },
    });
  }

  createCommonUser(data: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.USER],
      },
    });
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}
