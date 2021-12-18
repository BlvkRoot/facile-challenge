import { Request, Response } from "express";
import { GetPostByTitleService } from "../../services/posts/GetPostByTitleService";

class GetEncriptByIdController {
  constructor(private postService: GetPostByTitleService) {}

  async handle(request: Request, response: Response) {
    const { title } = request.params;
    try {
      const post = await this.postService.execute({ title });

      //   Set user password null not to be exposed
      if (post?.user) post.user.password = null;

      return response.status(200).json({
        success: true,
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

export { GetEncriptByIdController };
