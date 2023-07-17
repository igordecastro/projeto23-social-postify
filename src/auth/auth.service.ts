import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/user.repository';

@Injectable()
export class AuthService {
  private AUDIENCE = 'users';
  private ISSUER = 'Igor';

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async signin(body: AuthSigninDTO) {
    const user = await this.usersRepository.findUserByEmail(body.email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const validPassword = bcrypt.compareSync(body.password, user.password);
    if (!validPassword)
      throw new UnauthorizedException('Email or password invalid');

    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '10 days',
        subject: String(user.id),
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );

    return { token };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
