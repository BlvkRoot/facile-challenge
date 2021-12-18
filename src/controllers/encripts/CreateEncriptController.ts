import { Request, Response } from "express";
import { CreateEncriptService } from "../../services/encripts/CreateEncriptService";

class CreateEncriptController {
  constructor(private encriptService: CreateEncriptService) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body;

    try {
      const { id, encripted_name } = await this.encriptService.execute({
        name,
      });

      return response.status(200).json({
        id,
        encripted_name,
      });
    } catch ({ message }) {
      return response.status(400).json({
        code: 'E_VALIDATION_FAILURE',
        message,
      });
    }
  }
}

export { CreateEncriptController };
