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

interface ClientAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface ClientInput extends Optional<ClientAttributes, 'id'> {}

@Table({
  timestamps: true,
  tableName: 'clients',
  paranoid: true,
})
export class Client
  extends Model<ClientAttributes, ClientInput>
  implements ClientAttributes
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
