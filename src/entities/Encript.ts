import {
  Column,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("encripts")
export class Encript {
  @PrimaryColumn()
  id?: string;

  @Column()
  encripted_name: string;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: "now",
  })
  created_at?: Date | null;

  constructor(props: Omit<Encript, "id">, id?: string) {
    if (!this.id) {
      this.id = uuid();
    }

    Object.assign(this, props);
  }
}
