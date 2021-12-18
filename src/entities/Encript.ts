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

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt?: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt?: Date | null;

  constructor(props: Omit<Encript, "id">, id?: string) {
    if (!this.id) {
      this.id = uuid();
    }

    Object.assign(this, props);
  }
}
