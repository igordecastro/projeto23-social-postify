import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PublicationRepository } from './repository/publication.repository';

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
}
