import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, PublicationsModule],
})
export class AppModule {}
