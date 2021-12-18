import { CreateEncriptController } from "../../controllers/encripts/CreateEncriptController";
import { EncriptRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { CreateEncriptService } from "../../services/encripts/CreateEncriptService";

const createEncriptFactory = () => {
  const encriptRepository = new EncriptRepository();
  const encriptService = new CreateEncriptService(encriptRepository);
  const createEncription = new CreateEncriptController(encriptService);
  return createEncription;
};

export { createEncriptFactory };
