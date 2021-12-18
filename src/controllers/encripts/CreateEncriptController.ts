import { Request, Response } from "express";
import { CreatePostService } from "../../services/posts/CreateEncriptService";

class CreateEncriptController {
  constructor(private postService: CreatePostService) {}

  async handle(request: Request, response: Response) {
    const { title, description, status, cover_photo, post_id, user_id } =
      request.body;

      console.log(request.body);

      return false

    try {
      const post = await this.postService.execute({
        title,
        description,
        status,
        cover_photo,
        post_id,
        user_id,
      });

    //   Set user password null not to be exposed
      if(post?.user) post.user.password = null;

      return response.status(200).json({
        success: true,
        message: "Post criado com sucesso",
        data: post,
      });
    } catch ({ message }) {
      return response.status(400).json({
        success: false,
        message,
      });
    }
  }
}

export { CreateEncriptController };
