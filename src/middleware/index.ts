import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export const validationErrors = async (
  request: Request,
  response: Response,
  next: NextFunction,
  schema: any
) => {
  try {
    await schema.validate(request.body);
    next();
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response.status(400).json({
        code: 'E_VALIDATION_FAILURE',
        message: error.message,
      });
    }
    return response.status(500).json({
      success: false,
      message: `Erro interno do servidor - ${error}`,
    });
  }
};
