import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent
} from "typeorm";
import { Date } from "./embed";

@Entity("journeys")
@Tree("closure-table")
export class Journey extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({
    type: "enum",
    default: "journey"
  })
  type: "journey" | "choice" | "final";

  @Column("varchar", { length: 255, nullable: true })
  name: string;

  @Column("varchar", { length: 255, nullable: true })
  title: string;

  @Column("varchar", { length: 100, nullable: true })
  icon: string;

  @Column("text", { nullable: true }) description: string;

  @Column("boolean", { default: true })
  isActive: boolean;

  @Column({
    type: "enum",
    default: "blue"
  })
  color: "blue" | "gray" | "green" | "red";

  @Column({ type: "jsonb", nullable: true })
  data: any;

  @Column("smallint", { default: 1 }) order: number;

  @TreeChildren()
  children: Journey[];

  @TreeParent()
  parent: Journey;

  @Column(() => Date)
  date: Date;
}
