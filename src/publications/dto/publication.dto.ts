import { IsBoolean, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsDateString()
  dateToPublish: Date;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
