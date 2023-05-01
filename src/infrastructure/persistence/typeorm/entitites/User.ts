import { IUser } from '../../../../domain/entities/IUser';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id?: string | undefined;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
