import { getRepository, Repository } from "typeorm";
import { Encript } from "../../../entities/Encript";
import { IEncriptRepository } from "../IEncriptRepository";

class EncriptRepository implements IEncriptRepository {
  private repository: Repository<Encript>;
  constructor() {
    this.repository = getRepository(Encript);
  }

  async create(name: string): Promise<Encript> {
    try {
      const encriptData = this.repository.create({
        name,
      });
      return await this.repository.save(encriptData);
    } catch ({ message }) {}
  }

  async findEncriptById(id: string): Promise<Encript> {
    try {
      const encript = await this.repository.findOne({ id });
      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

}

export { EncriptRepository };
