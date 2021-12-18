import { CreateEncriptController } from "../../controllers/encripts/CreateEncriptController";
import { EncriptRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { CreateEncriptService } from "../../services/encripts/CreateEncriptService";
import { EncriptionService } from "../../services/encripts/EncriptionService";

const createEncriptFactory = () => {
  const encriptRepository = new EncriptRepository();
  const encriptionService = new EncriptionService();
  const encriptService = new CreateEncriptService(
    encriptRepository,
    encriptionService
  );
  const createEncription = new CreateEncriptController(encriptService);
  return createEncription;
};

export { createEncriptFactory };
