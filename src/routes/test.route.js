import {Router} from 'express';
const router = Router();
import { hello } from '../controllers/test.controller.js';

router.get('/test/hello', hello);

router.get('/test2/:nico', (request, response) => {
    const { nico } = request.params;
    response.status(200).json({ message: `API funcionando 2, ${nico}` });
});

export default router;