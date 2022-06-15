import { Optional } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
} from 'sequelize-typescript';

interface RoleAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface RoleInput extends Optional<RoleAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'roles',
  paranoid: true,
})
export class Role
  extends Model<RoleAttributes, RoleInput>
  implements RoleAttributes
{
  @PrimaryKey
  @Column
  id!: number;

  @Column
  first_name!: string;

  @Column
  last_name!: string;

  @Column(DataType.STRING(200))
  email: string = '';

  @Column(DataType.STRING(200))
  password: string = '';

  @CreatedAt
  @Column(DataType.DATE)
  readonly created_at!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  readonly updated_at!: Date;

  @DeletedAt
  @Column(DataType.DATE)
  readonly deleted_at!: Date;
}
