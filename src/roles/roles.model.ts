import { Column, DataType, Table, Model, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttr {
  value: string
  description: string
}

@Table({
  tableName: 'roles'
})
export class Role extends Model<Role, RoleCreationAttr>{

  @ApiProperty({
    example: '1', description: 'Unique id'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({
    example: 'ADMIN', description: 'Role name'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  value: string

  @ApiProperty({
    example: 'Administrator', description: 'Role description'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string

  @BelongsToMany(() => User, ()=> UserRoles)
  users: User[]
}
