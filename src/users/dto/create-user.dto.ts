import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({
    example: 'some@email.com', description: 'Unique email'
  })
  readonly email: string

  @ApiProperty({
    example: '123', description: 'Password'
  })
  readonly password: string
}
