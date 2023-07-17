import { Publication } from '@prisma/client';
import { CreatePublicationDTO } from '../dto/publication.dto';

export abstract class PublicationRepository {
  abstract createPublication(
    data: CreatePublicationDTO,
    userId: number,
  ): Promise<Publication>;
  abstract findPublicationByUser(userId: number): Promise<Publication[]>;
}
