import { Router } from 'express';
import { encriptRouter } from './encripts/encript.routes';

const router = Router();

// Home default route describing project
router.get('/', (request, response) => {
    response.json({
        "version": "1.0.0",
        "author": "Henriques Salucamba",
        "project-name": "Facile-Challenge",
        "description": "This project aims at encrypting and decrypting a given string"
    });
});

router.use(encriptRouter);

export { router }
