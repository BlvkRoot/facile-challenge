import { CreatePostController } from "../../controllers/encripts/CreateEncriptController";
import { PostRepository } from "../../repositories/encripts/implementation/EncriptRepository";
import { UserRepository } from "../../repositories/users/Implementation/UserRepository";
import { CreatePostService } from "../../services/posts/CreatePostService";

const createPostFactory = () => {
  const postRepository = new PostRepository();
  const userRepository = new UserRepository();
  const postService = new CreatePostService(postRepository, userRepository);
  const createPost = new CreatePostController(postService);
  return createPost;
};

export { createPostFactory };
