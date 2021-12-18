import { IEncriptRepository } from "../../repositories/encripts/IEncriptRepository";

interface IEncriptParam {
  encript_id: string;
}

class GetEncriptByIdService {
  constructor(private encriptRepository: IEncriptRepository) {}

  async execute({ encript_id }: IEncriptParam) {
    try {
      const encript = await this.encriptRepository.findEncriptById(encript_id);

      if (!encript) {
        throw new Error(`Ecriptação inexistente.`);
      }
      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export { GetEncriptByIdService };
