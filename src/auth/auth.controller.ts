import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './login.dto';

@Controller('auth')
export class AuthController {
  @Post()
  login(@Body() data: LoginDTO) { }
}
