import { Encript } from '../../entities/Encript';

interface IEncriptRepository {
  create(name: string): Promise<Encript>;
  findEncriptById(id: string): Promise<Encript>;
}

export { IEncriptRepository };
