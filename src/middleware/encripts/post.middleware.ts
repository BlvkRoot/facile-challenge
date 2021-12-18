import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { validationErrors } from "..";

export const postMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("O campo título é obrigatório")
      .nullable(false),
    description: yup
        .string()
        .required("O campo descrição é obrigatório")
        .nullable(false),
    status: yup
        .string()
        .required("O campo status é obrigatório")
        .nullable(false),
  });
  await validationErrors(request, response, next, schema);
};
