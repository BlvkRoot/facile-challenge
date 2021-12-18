import { Router } from "express";
import { createEncriptFactory } from "../../factories/encripts/CreateEncriptFactory";
import { getEncriptByIdFactory } from "../../factories/encripts/GetEncriptByIdFactory";
import { encriptMiddleware } from "../../middleware/encripts/encript.middleware";

const postRouter = Router();

postRouter.post("/encripts", encriptMiddleware, (request, response) => {
  createEncriptFactory().handle(request, response);
});

postRouter.get("/encripts/:encript_id", (request, response) => {
  getEncriptByIdFactory().handle(request, response);
});

export { postRouter };
