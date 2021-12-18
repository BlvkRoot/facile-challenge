import { GetEncriptByIdController } from "../../controllers/encripts/GetEncriptByIdController";
import { EncriptRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { EncriptionService } from "../../services/encripts/EncriptionService";
import { GetEncriptByIdService } from "../../services/encripts/GetEncriptByIdService";

const getEncriptByIdFactory = () => {
  const encriptRepository = new EncriptRepository();
  const encriptionService = new EncriptionService();
  const encriptService = new GetEncriptByIdService(
    encriptRepository,
    encriptionService
  );
  const getEncription = new GetEncriptByIdController(encriptService);
  return getEncription;
};

export { getEncriptByIdFactory };
