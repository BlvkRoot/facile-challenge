import { GetPostByTitleController } from "../../controllers/encripts/GetEncriptByIdController";
import { PostRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { GetPostByTitleService } from "../../services/posts/GetPostByTitleService";

const getPostByTitleFactory = () => {
  const postRepository = new PostRepository();
  const postService = new GetPostByTitleService(postRepository);
  const getPost = new GetPostByTitleController(postService);
  return getPost;
};

export { getPostByTitleFactory }
