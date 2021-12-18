import { Router } from "express";
import { createPostFactory } from "../../factories/encripts/CreateEncriptFactory";
import { deletePostFactory } from "../../factories/encripts/DeletePostFactory";
import { getAllPostsFactory } from "../../factories/encripts/GetAllPostsFactory";
import { getPostByTitleFactory } from "../../factories/encripts/GetEncriptByIdFactory";
import { updatePostByIdFactory } from "../../factories/encripts/UpdatePostByIdFactory";
import { postMiddleware } from "../../middleware/encripts/post.middleware";

const postRouter = Router();

postRouter.post("/posts", (request, response) => {
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
