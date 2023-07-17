import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PublicationRepository } from './repository/publication.repository';
import { CreatePublicationDTO } from './dto/publication.dto';

@Injectable()
export class PublicationsService {
  constructor(private readonly publicationsRepository: PublicationRepository) {}

  async getPublications(userId: number) {
    const publications =
      await this.publicationsRepository.findPublicationByUser(userId);
    if (!publications)
      throw new HttpException(
        'No publications for this user!',
        HttpStatus.NO_CONTENT,
      );
    return publications;
  }

  async createPublication(data: CreatePublicationDTO, userId) {
    await this.publicationsRepository.createPublication(data, userId);
  }
}
