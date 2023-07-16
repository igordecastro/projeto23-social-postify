import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSigninDTO } from './dto/auth-signin.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: AuthSigninDTO) {
    return this.authService.signin(body);
  }
}
