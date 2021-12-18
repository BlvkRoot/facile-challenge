import { Router } from 'express';
import { postRouter } from './encripts/encript.routes';
import { authRouter } from './users/auth.routes';
import { userRouter } from "./users/user.routes";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(postRouter);

export { router }
