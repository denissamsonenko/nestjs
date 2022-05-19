import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttr {
  email: string
  password: string
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttr> {

  @ApiProperty({
    example: '1', description: 'Unique id',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'some@email.com', description: 'Unique email',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: '123', description: 'Password',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'true', description: 'banned user or not',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'break the rules', description: 'reason for ban',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
