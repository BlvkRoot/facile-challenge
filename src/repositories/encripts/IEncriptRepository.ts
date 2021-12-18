import { Encript } from '../../entities/Encript';

interface IEncriptRepository {
  create(encripted_name: string): Promise<Encript>;
  findEncriptById(id: string): Promise<Encript>;
  findEncriptByEncriptedName(encripted_name: string): Promise<Encript>;
}

export { IEncriptRepository };
