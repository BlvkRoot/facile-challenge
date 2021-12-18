import { IEncriptRepository } from "../../repositories/encripts/IEncriptRepository";
import { EncriptionService } from "./EncriptionService";

interface IEncriptRequest {
  name: string;
}

class CreateEncriptService {
  constructor(
    private encriptRepository: IEncriptRepository,
    private encriptionService: EncriptionService
  ) {}

  async execute({
    name }: IEncriptRequest) {
    try {

      const encripted_name = await this.encriptionService.encript(name);
      const encript = await this.encriptRepository.create(encripted_name);

      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export { CreateEncriptService };
