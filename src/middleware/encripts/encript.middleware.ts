import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { validationErrors } from "..";

export const postMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("O campo \"name\" é obrigatório")
      .nullable(false),
  });
  await validationErrors(request, response, next, schema);
};
