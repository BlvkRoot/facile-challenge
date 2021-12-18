import { GetEncriptByIdController } from "../../controllers/encripts/GetEncriptByIdController";
import { EncriptRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { GetEncriptByIdService } from "../../services/encripts/GetEncriptByIdService";

const getEncriptByIdFactory = () => {
  const encriptRepository = new EncriptRepository();
  const encriptService = new GetEncriptByIdService(encriptRepository);
  const getEncription = new GetEncriptByIdController(encriptService);
  return getEncription;
};

export { getEncriptByIdFactory }
