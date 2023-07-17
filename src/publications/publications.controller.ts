import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { User } from '@prisma/client';
import { UserRequest } from 'src/auth/decorators/user.decorator';

@Controller()
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(AuthGuard)
  @Get('publications')
  publicationsByUser(@UserRequest() user: User) {
    return this.publicationsService.getPublications(user.id);
  }

  @UseGuards(AuthGuard)
  @Post('publications')
  async userLogged(@UserRequest() user: User) {
    return user;
  }
}
