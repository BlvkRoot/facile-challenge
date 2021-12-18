import { IEncriptRepository } from "../../repositories/encripts/IEncriptRepository";
import { EncriptionService } from "./EncriptionService";

interface IEncriptParam {
  encript_id: string;
}

class GetEncriptByIdService {
  constructor(
    private encriptRepository: IEncriptRepository, 
    private encriptionService: EncriptionService) {}

  async execute({ encript_id }: IEncriptParam) {
    try {
      let encript = await this.encriptRepository.findEncriptById(encript_id);

      if (!encript) {
        throw new Error(`Ecriptação inexistente.`);
      }
      let { encripted_name } = encript;
      encript.encripted_name = await this.encriptionService.decript(encripted_name);
      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export { GetEncriptByIdService };
