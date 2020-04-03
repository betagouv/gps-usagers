import { CreateDateColumn, Timestamp, UpdateDateColumn } from "typeorm";

export class Date {
  @CreateDateColumn()
  created: Timestamp;

  @UpdateDateColumn()
  updated: Timestamp;
}
