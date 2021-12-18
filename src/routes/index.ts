import { Router } from 'express';
import { encriptRouter } from './encripts/encript.routes';

const router = Router();

router.use(encriptRouter);

export { router }
