import { Injectable } from '@nestjs/common';
import { LoginDTO } from './login.dto';

@Injectable()
export class AuthService {
  login(data: LoginDTO) { }
}
