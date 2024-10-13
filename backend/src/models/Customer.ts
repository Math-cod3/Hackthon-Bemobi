
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  paymentMethod: string;

  @Column()
  preferredChannel: string;

  @Column()
  status: string;

  // Outros campos conforme necessário
}
