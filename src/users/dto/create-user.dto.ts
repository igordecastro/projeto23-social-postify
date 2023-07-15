import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please insert a valid email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 6,
      minLowercase: 1,
      minSymbols: 1,
      minUppercase: 1,
      minNumbers: 1,
    },
    { message: 'Password not strong enough!' },
  )
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}
