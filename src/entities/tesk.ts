import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { StatusTaskEnum } from "./enum/status.enum";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: "" })
  description: string;

  @Column({type: "enum",enum: StatusTaskEnum, default: StatusTaskEnum.pending})
  status : StatusTaskEnum

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date
}
