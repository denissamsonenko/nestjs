import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({
    example: 'some@email.com', description: 'Unique email',
  })
  @IsString({ message: 'should be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: '123', description: 'Password',
  })
  @IsString({ message: 'should be string' })
  @Length(4, 16, { message: 'Incorrect length - min 4, max 16' })
  readonly password: string;
}
