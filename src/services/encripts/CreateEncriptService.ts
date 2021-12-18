import { IEncriptRepository } from "../../repositories/encripts/IEncriptRepository";

interface IEncriptRequest {
  name: string;
}

class CreateEncriptService {
  constructor(
    private encriptRepository: IEncriptRepository
  ) {}

  async execute({
    name }: IEncriptRequest) {
    try {
      const encript = await this.encriptRepository.create(name);

      return encript;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export { CreateEncriptService };
