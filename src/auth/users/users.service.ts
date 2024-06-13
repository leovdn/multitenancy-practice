import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create(data: any) {
    return 'This action adds a new user';
  }
}
