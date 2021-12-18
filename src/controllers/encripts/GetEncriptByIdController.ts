import { Request, Response } from "express";
import { GetEncriptByIdService } from "../../services/encripts/GetEncriptByIdService";

class GetEncriptByIdController {
  constructor(private encriptService: GetEncriptByIdService) {}

  async handle(request: Request, response: Response) {
    const { encript_id } = request.params;
    try {
      const { id, encripted_name } = await this.encriptService.execute({
        encript_id,
      });

      return response.status(200).json({
        id,
        encripted_name,
      });
    } catch ({ message }) {
      return response.status(400).json({
        message,
      });
    }
  }
}

export { GetEncriptByIdController };
