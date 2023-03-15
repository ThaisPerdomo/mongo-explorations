import { Router } from 'express';
// Importando router do express

// ÁREA PARA IMPORTAR OS CONTROLLERS PARA CÁ, NO FORMATO ABAIXO
import * as pageController from '../controllers/pageController';


const router = Router();

// ÁREA PARA CRIAR AS ROTAS NO FORMATO ABAIXO, COLOCANDO OS CONTROLLERS NO SEGUNDO PARÂMETRO, ONDE ESTÁ A FUNÇÃO VAZIA

router.get('/', pageController.home);

router.post('/cadastrarusuario', pageController.createUser);
router.get('/usuario/:id/addidade', pageController.addAge);

export default router;