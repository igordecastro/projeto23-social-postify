import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { User } from '@prisma/client';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { CreatePublicationDTO } from './dto/publication.dto';

@Controller()
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(AuthGuard)
  @Get('publications')
  publicationsByUser(@UserRequest() user: User) {
    return this.publicationsService.getPublications(user.id);
  }

  @UseGuards(AuthGuard)
  @Post('publication')
  async userLogged(
    @Body() body: CreatePublicationDTO,
    @UserRequest() user: User,
  ) {
    return this.publicationsService.createPublication(body, user.id);
  }
}
