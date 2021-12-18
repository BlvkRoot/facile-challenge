import { getRepository, Repository } from "typeorm";
import { Encript } from "../../../entities/Encript";
import { IEncriptRepository } from "../IEncriptRepository";

class EncriptRepository implements IEncriptRepository {
  private repository: Repository<Encript>;
  constructor() {
    this.repository = getRepository(Encript);
  }

  async create(encripted_name: string): Promise<Encript> {
    try {
      const encriptData = this.repository.create({
        encripted_name,
      });
      return await this.repository.save(encriptData);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async findEncriptById(id: string): Promise<Encript> {
    try {
      const encript = await this.repository.findOne({ id });
      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async findEncriptByEncriptedName(encripted_name: string): Promise<Encript> {
    try {
      const encript = await this.repository.findOne({ encripted_name });
      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

}

export { EncriptRepository };
