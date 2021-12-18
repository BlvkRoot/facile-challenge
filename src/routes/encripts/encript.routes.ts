import { Router } from "express";
import { createEncriptFactory } from "../../factories/encripts/CreateEncriptFactory";
import { getPostByTitleFactory } from "../../factories/encripts/GetEncriptByIdFactory";
import { postMiddleware } from "../../middleware/encripts/encript.middleware";

const postRouter = Router();

postRouter.post("/encripts", (request, response) => {
  createPostFactory().handle(request, response);
});

postRouter.get("/posts/:title", (request, response) => {
  getPostByTitleFactory().handle(request, response);
});

postRouter.put("/posts/:post_id", postMiddleware, (request, response) => {
  updatePostByIdFactory().handle(request, response);
});

postRouter.delete("/posts/:post_id", (request, response) => {
  deletePostFactory().handle(request, response);
});

postRouter.get("/posts", (request, response) => {
  getAllPostsFactory().handle(request, response);
});

export { postRouter };
