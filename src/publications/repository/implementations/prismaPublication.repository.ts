import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PublicationRepository } from '../publication.repository';
import { CreatePublicationDTO } from 'src/publications/dto/publication.dto';

@Injectable()
export class PrismaPublicationRepository implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPublication(data: CreatePublicationDTO, userId: number) {
    const convertedData = {
      ...data,
      dateToPublish: data.dateToPublish.toString(),
      userId: userId,
    };
    return await this.prisma.publication.create({ data: convertedData });
  }

  async findPublicationByUser(id: number) {
    return await this.prisma.publication.findMany({ where: { userId: id } });
  }
}
